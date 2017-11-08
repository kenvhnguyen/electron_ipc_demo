console.log('Starting up...')
const electron = require('electron')

const app = electron.app
const gui = electron.BrowserWindow

let mainWindow
app.on('ready', _ => {
  console.log('Electron app ready!')
  mainWindow = new gui({
    height: 400,
    width: 400
  })
  mainWindow.loadURL(`file://${__dirname}/countdown.html`)
  mainWindow.on('close', _ => {
    console.log('Window closed!')
    mainWindow = null
  })
})
