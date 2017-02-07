'use strict';

var gulp = require('gulp');
var spawn = require('child_process').spawn;
var runSequence = require('run-sequence');
var electron = require('electron-connect').server.create();

function getSpawn(command, args, options) {
  if (!/^win/.test(process.platform)) { // linux
    return spawn(command, args, {
      stdio: 'inherit'
    });
  } else { // windows
    return spawn('cmd', ['/s', '/c', command].concat(args), {
      stdio: [null, process.stdout, process.stderr]
    });
  }
}

// when using live-update mode set some environment variables so electron will use electron connect
process.env.LIVE_UPDATE = "true";
if (process.argv.find(function(args) {
    return args === '--openDevTools';
  })
) {
  process.env.OPEN_DEV_TOOLS = "true";
}

// kicks off all the tasks to run and watch for changes on src and electron files
gulp.task('watch', ['start-watch-src','watch-electron'], function (cb) {
    setTimeout(cb, 200);
});

// kicks off all the tasks to run and watch for changes on src files
gulp.task('start-watch-src', function (cb) {
  var cmd = getSpawn('ng', ['build']);
  cmd.on('close', function (code) {
      runSequence('copy','copy-electron-connect', 'npm-install', 'start-electron','watch-src');
      cb(code);
  });
});

// called when a src file has been changed
gulp.task('reload', function (cb) {
  var cmd = getSpawn('ng', ['build']);
  cmd.on('close', function (code) {
      runSequence('copy', 'copy-electron-connect', 'npm-install', 'reload-electron');
      cb(code);
  });
});

// copy over the electron-connect node_module to the dist dir
gulp.task('copy-electron-connect', function () {
    gulp.src(['node_modules/electron-connect/**'], {base: 'node_modules/'}).pipe(gulp.dest('dist/node_modules'));
});

// run npm install inside the dist dir
gulp.task('npm-install', function (cb) {
  var cmd = getSpawn('npm', ['run', 'npm-install']);
  cmd.on('close', function (code) {
      cb(code);
  });
});

// starts electron
gulp.task('start-electron', function () {
  // Start browser process
  electron.start('dist/');
});

// calls reload from electron-connect
gulp.task('reload-electron', function () {
  // Reload renderer process
  electron.broadcast("reloadit", "true");
});

// watches the src files for changes
gulp.task('watch-src', 'Watch for changed files', function (cb) {  
  // Reload renderer process after files change
  gulp.watch(['src/**/*'], ['reload']);
});

// called when an electron file has been changed
gulp.task('restart', function (cb) {
  var cmd = getSpawn('echo', ['"restarting"']);
  cmd.on('close', function (code) {
      runSequence('copy', 'copy-electron-connect', 'restart-electron');
      cb(code);
  });
});

// calls reload from electron-connect
gulp.task('restart-electron', function () {
  // Reload renderer process
  electron.restart();
});

// watches the electron files for changes
gulp.task('watch-electron', 'Watch for changed files', function (cb) {  
  // Reload main process after files change
  gulp.watch(['electron/**/*'], ['restart']);
});