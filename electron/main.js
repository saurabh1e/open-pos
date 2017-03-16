const electron = require('electron');
var client;

const ipcMain = electron.ipcMain;
var exec = require('child_process').execSync;
var randomstring = require("randomstring");

const ESC = "\x1b";
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

ipcMain.on('printBill', function(event, args) {
  console.log(args);

  var data = args;

  execute('echo  '+ESC+'@ > /dev/usb/lp1');
  execute('echo '+ESC+'E'+String.fromCharCode(1)+' > /dev/usb/lp1');
  execute('echo  '+ESC+'a'+String.fromCharCode(1)+' > /dev/usb/lp1' );
  execute('echo  '+data['shopName']+' > /dev/usb/lp1');
  execute('echo  '+ESC+'E'+String.fromCharCode(0)+' > /dev/usb/lp1' );
  execute('echo  '+ESC+'a'+String.fromCharCode(1)+' > /dev/usb/lp1' );
  execute('echo  Bill Date: ' + data['billDate']+' > /dev/usb/lp1');
  execute('echo  Reference#: ' + data['invoice']+' > /dev/usb/lp1');
  execute('echo  '+ESC+'@ > /dev/usb/lp1');
  // execute('echo  '+ESC+'d'+String.fromCharCode(1)+' > /dev/usb/lp1' );

  data['items'].forEach(function(value){
    var name = value['name'].substr(0,16);
    var qty = value.quantity.toString();
    name = name.padEnd(18, '.');
    execute('echo ' +name+' x'+qty.padEnd(5, '.')+value['price'] + '/- > /dev/usb/lp1')

  });
  // execute('echo  '+ESC+'d'+String.fromCharCode(1)+' > /dev/usb/lp1' );
  execute('echo  '+ESC+'a'+String.fromCharCode(2)+' > /dev/usb/lp1' );
  execute('echo '+ESC+'E'+String.fromCharCode(1)+' > /dev/usb/lp1');
  execute('echo  Sub.Total: ' + data['subTotal']+'/- > /dev/usb/lp1');
  execute('echo  Discount: ' + data['autoDiscount']+'/- > /dev/usb/lp1');

  var total = data['total']-data['autoDiscount'];
  execute('echo  Total: ' + total+'/- > /dev/usb/lp1');
  execute('echo '+ESC+'E'+String.fromCharCode(1)+' > /dev/usb/lp1');

  execute('echo  '+ESC+'@ > /dev/usb/lp1');
  execute('echo  '+ESC+'a'+String.fromCharCode(1)+' > /dev/usb/lp1' );
  execute('echo Thank for shopping with us. > /dev/usb/lp1' );
  execute('echo Visit us again! > /dev/usb/lp1' );
  execute('echo  '+ESC+'d'+String.fromCharCode(4)+' > /dev/usb/lp1' );
  execute('echo  '+GS+'V\x41'+String.fromCharCode(3)+' > /dev/usb/lp1' );


});

ipcMain.on('generateReferenceNumber', function(event){
  event.returnValue = (randomstring.generate(12));
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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
