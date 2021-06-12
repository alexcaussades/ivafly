
const { app, BrowserWindow, ipcMain } = require('electron');
const {data: ivaoData} = require("./ivao/api-ivao.json")
const webPreferences = require('./webPreferences')
const path = require("path")

let win

function createWindow () {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join('images/IVAO_Logo.png'),
        webPreferences: {
            ...webPreferences
        }
    });
    
    win.loadFile('./views/home/home.html');

    // Handle window closed
    win.on('closed', () => {
        win = null
    });

    return win;
}


// Close App
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })


app.whenReady().then(() => {
    createWindow()
  })



