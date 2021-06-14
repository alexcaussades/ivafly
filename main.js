
const { app, BrowserWindow, ipcMain } = require('electron');
const {data: ivaoData} = require("./ivao/api-ivao.json")
const webPreferences = require('./webPreferences')
const path = require("path")



let win

function createWindow (withDefault = 1200, heightDefault = 800, iconDefault = path.join('images/IVAO_Logo.png'), titleDefault = "IvaFly") {
    win = new BrowserWindow( {
        width: withDefault,
        height: heightDefault,
        icon: iconDefault,
        title: titleDefault,
        webPreferences: {
            ...webPreferences
        },
    });

    /**
     * ouverture des codes sources en version devs
     */
   
     
    

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


app.whenReady().then(createWindow)



