console.log('Starting up...')
const electron = require('electron')

const app = electron.app
const gui = electron.BrowserWindow

app.on('ready', _ => {
  console.log('Electron app ready!')
  new gui({
    height: 400,
    width: 400
  })
})
