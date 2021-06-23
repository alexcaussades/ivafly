
const { app, BrowserWindow, ipcMain } = require('electron');
const webPreferences = require('./webPreferences')
const path = require("path");
const {users} = require("./logs-data/users/users.json")



let win = null
let Mainwindows = null
console.log(users["userid"])

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

    if (users.account === null){
        Mainwindows = createWindow("./views/account/creataccount.html", 600, 480, null, 'Add account')
    }else{
        Mainwindows = createWindow("./views/account/account.html", 600, 480, null, 'my account') 
    }
})