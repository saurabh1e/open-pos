const electron = require('electron');
var client;

const ipcMain = electron.ipcMain;
var exec = require('child_process').execSync;
var randomstring = require("randomstring");
// var JsBarcode = require('jsbarcode');
// var Canvas  = require('canvas');
//
// var canvas = new Canvas();

if (require('electron-squirrel-startup')) return;

if (handleSquirrelEvent()) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}



const ESC = "@";
const GS="\x1d";
const NUL="\x00";

if (!String.prototype.padEnd) {
  String.prototype.padEnd = function padEnd(targetLength,padString) {
    targetLength = targetLength>>0; //floor if number or convert non-number to 0;
    padString = String(padString || ' ');
    if (this.length > targetLength) {
      return String(this);
    }
    else {
      targetLength = targetLength-this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
      }
      return String(this) + padString.slice(0,targetLength);
    }
  };
}


function execute(command){
  exec(command, function(error, stdout, stderr){ console.log(stdout); });
}

ipcMain.on('generateReferenceNumber', function(event){
  event.returnValue = (randomstring.generate(12));
});


ipcMain.on('printBill', function(event, args) {
  console.log(args);
  var html = '<html><body>'+args+'</body></html>';
  html =  'data:text/html,' + encodeURIComponent(html);

  var win = new BrowserWindow({
    width: 400,
    height: 600,
    titleBarStyle: 'hidden-inset',
    "web-preferences": {
      "web-security": false
    }
  });

  // and load the index.html of the app.
  win.loadURL(html);
  win.webContents.on('did-finish-load', function() {

    win.webContents.print();event.returnValue = true
  });

  win.on('closed', function() {
    event.returnValue = false
  });


});

ipcMain.on('printLabel', function(event, args){
//   JsBarcode(canvas, args,  {
//     format: "EAN8"
//   });
//
//   var data =  '<img src="' + canvas.toDataURL('image/png') + '">';
//   var html =  'data:text/html,' + encodeURIComponent('<html><body><div>' + data + '</div></body>');
//
//   var win = new BrowserWindow({
//     width: 400,
//     height: 200,
//     titleBarStyle: 'hidden-inset',
//     "web-preferences": {
//       "web-security": false
//     }
//   });
//
//   // and load the index.html of the app.
//   win.loadURL(html);
//   win.webContents.on('did-finish-load', function() {
//     win.webContents.print();
//
//   });
});


// Connect to live update if LIVE_UPDATE env variable is true
if (process.env.LIVE_UPDATE === "true") {
  client = require('electron-connect').client;
}
// Module to control application life.
const app = electron.app;
const protocol = electron.protocol;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  //Intercept any urls on the page and find the file on disk instead
  protocol.interceptFileProtocol('file', function(req, callback) {
    var url = req.url.substr(7);
    callback({path: path.normalize(__dirname + url)});
  },function (error) {
    if (error) {
      console.error('Failed to register protocol');
    }
  });

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 700,
    title: require('./package.json').name,
    titleBarStyle: 'hidden-inset',
    "web-preferences": {
      "web-security": false
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: 'index.html',
    protocol: 'file:',
    slashes: true
  }));


  // Open the DevTools.
  if (process.env.OPEN_DEV_TOOLS === "true") {
    mainWindow.webContents.openDevTools();
  }

  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // Connect to live update if LIVE_UPDATE env variable is true
  if (client) {
    client.create(mainWindow, {"sendBounds":false});
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main-route process
// code. You can also put them in separate files and require them here.
function handleSquirrelEvent() {
  if (process.argv.length === 1) {
    return false;
  }

  const ChildProcess = require('child_process');
  const path = require('path');

  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const spawn = function(command, args) {
    let spawnedProcess, error;

    try {
      spawnedProcess = ChildProcess.spawn(command, args, {detached: true});
    } catch (error) {}

    return spawnedProcess;
  };

  const spawnUpdate = function(args) {
    return spawn(updateDotExe, args);
  };

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
    case '--squirrel-updated':
      // Optionally do things such as:
      // - Add your .exe to the PATH
      // - Write to the registry for things like file associations and
      //   explorer context menus

      // Install desktop and start menu shortcuts
      spawnUpdate(['--createShortcut', exeName]);

      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-uninstall':
      // Undo anything you did in the --squirrel-install and
      // --squirrel-updated handlers

      // Remove desktop and start menu shortcuts
      spawnUpdate(['--removeShortcut', exeName]);

      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-obsolete':
      // This is called on the outgoing version of your app before
      // we update to the new version - it's the opposite of
      // --squirrel-updated

      app.quit();
      return true;
  }
}
