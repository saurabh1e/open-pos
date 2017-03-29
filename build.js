/**
 * Created by saurabh on 29/3/17.
 */
var electronInstaller = require('electron-winstaller');
resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: 'dist-app/POS-win32-x64',
  outputDirectory: 'dist-app/windows',
  authors: 'POS Inc.',
  exe: 'pos.exe'
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
