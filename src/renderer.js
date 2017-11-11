console.log('In renderer!')

const electron = require("electron")
const ipc = electron.ipcRenderer

window.onload=function() {
    document.getElementById('start').addEventListener('click', _=>{
        console.log('send to inter-process communication component')
        ipc.send('countdown-start')
    })  
}
