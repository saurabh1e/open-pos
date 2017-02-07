'use strict';

var gulp = require('gulp-help')(require('gulp'));
var config = require('../build.conf');
var path = require('path');

gulp.task('copy', 'Copy the electron files', function() {
  return gulp
    .src(config.paths.electronrequiredfiles, {base: "."})
    .pipe(gulp.dest(function(file) {
      // Doing a bunch of chopping up of the paths to get it to copy
      // into the dist dir correctly
      // First get the directory one up from scripts dir
      var parentPath = __dirname.split('/');
      parentPath.pop();
      parentPath = parentPath.join('/');
      // Now lets get rid of everything up to where the assets are
      var filePath = file.path.split(parentPath)[1];
      // Git rid of the filename from the path
      var splitPath = filePath.split('/');
      filePath = splitPath.slice(2).join('/');
      filePath = filePath.substring(0, filePath.lastIndexOf("/"));
      // Now override the filepath to only be the name
      file.path = path.basename(file.path);
      // Return back the Path we chopped up above
      return  'dist/' + filePath;
    }));
});
