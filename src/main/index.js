'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
? `http://localhost:9080`
: `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    x: 360,
    y: 240,
    width: 1200,
    height: 600,
    minWidth: 500,
    minHeight: 200,
    acceptFirstMouse: true,
    titleBarStyle: 'hidden',
    frame: false
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

let ptyProcess = null

ipcMain.on('shell-start', (event, arg) => {
  console.log('received shell-start')
  let os = require('os')
  let pty = require('node-pty')

  let shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash'

  ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env
  })

  ptyProcess.on('data', function (data) {
    console.log('pty data: ' + data)
    return mainWindow.webContents.send('shell', data)
  })

  ipcMain.on('shell-input', (event, arg) => {
    console.log('ipc shell-input: ' + arg)
    ptyProcess.write(arg)
  })
})

ipcMain.on('shell-stop', (event, arg) => {
  console.log('received shell-stop')
  process.kill(ptyProcess.pid, 'SIGKILL')
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
*/
