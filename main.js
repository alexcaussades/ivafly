
const { app, BrowserWindow, ipcMain } = require('electron');
const webPreferences = require('./webPreferences')
const path = require("path");



let win = null
let Mainwindows = null


function createWindow (loadFileTemplate, withDefault = 1200, heightDefault = 800, iconDefault = path.join('images/IVAO_Logo.png'), titleDefault = "IvaFly") {
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
   
     
    

    win.loadFile(loadFileTemplate);

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


app.whenReady().then(() =>{
    Mainwindows = createWindow('./views/home/home.html')
})

ipcMain.on("welcome",(EventTarget, arg) =>{
    Mainwindows = createWindow("./views/account/account.html", 600, 480, null, 'hello')
})