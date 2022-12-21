/**
 * electron.js
 * 
 * The main brain! 
 * 
 * This is where we will place all of the listeners. This is very important.
 */
const path = require('path');
const { app, BrowserWindow, ipcMain, shell } = require('electron');
const isDev = require('electron-is-dev');

const { 
  showDialog,
  fileChosenError,
  isEncryptionAvailable, 
  listIndices,
} = require('./lib/controller');

const {
  SECURE_STORE_ENCRYPTION_CHECK,
  ALGOLIA_LIST_INDICES,
} = require('./lib/events');

/**
 * Create the main window of the application
 * - support for multiple windows happening now for browser to view live preview..
 */

let windows = new Set();
let mainWindow = null;

/**
 * Create Main browser window
 */
function createWindow() {

    ipcMain.removeAllListeners();
    
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        minWidth: 1024,
        minHeight: 768,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: false,
            contextIsolation: true,
            webSecurity: true
        },
    });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }


  // handlers 
  // here are some sample handlers that we have in the application
  // that correspond to the mainApi apis, and the controllers, and events! 
  
  ipcMain.handle('choose-file', (e, message) => showDialog(mainWindow, message));
  ipcMain.handle('file-chosen', (e, message) => generateRules(mainWindow, message));
  ipcMain.handle('file-chosen-error', (e, message) => fileChosenError(mainWindow, message));

  // Secure Storage
  ipcMain.handle(SECURE_STORE_ENCRYPTION_CHECK, (e, message) => isEncryptionAvailable(mainWindow, message));
  
  // Algolia
  ipcMain.handle(ALGOLIA_LIST_INDICES, (e, application) => listIndices(mainWindow, application));

  // add the main window to the set for multiple windows support
  windows.add(mainWindow);

  // handle the closed and deletion of the window
  mainWindow.on("closed", () => {
    windows.delete(mainWindow);
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // create the main application window
  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    windows.delete(mainWindow);
    mainWindow = null;
    app.quit();
  }
});

app.on('activate', () => {
  // check to see if we already have a window open.
  if (windows.size === 0) {
    // create the main window since we have none
    createWindow();
  }
});

