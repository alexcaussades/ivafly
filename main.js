const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const os = require('os')
const local = os.homedir() + '/AppData/Local/ivafly'
const fs = require('fs')
const friend = require('./logs-data/friend/addfriends')

/**
 * Creation de données utile
 */
let profil = {
    users: {
        account: null,
    },
    preferencie: {
        lang: 'en',
        interface: 'white',
    },
}
let newUsersProfil = JSON.stringify(profil, null, 2)

if (!fs.existsSync(local)) {
    fs.mkdirSync(local)
    fs.mkdirSync(local + '/friend')
    fs.mkdirSync(local + '/sav')
    fs.mkdirSync(local + '/data-atc')
    fs.mkdirSync(local + '/data-pilot')
}

if(!fs.existsSync(local + '/users.json')){
    fs.writeFileSync(local + '/users.json', newUsersProfil)
}

fs.open(local + '/users.json', function (err) {
    if (err) {
        fs.writeFile(local + '/users.json', newUsersProfil, function (err) {})
    }
})

friend.creatdatabase()

/**
 * Logiciel
 */

let win = null
let Mainwindows = null

function createWindow(
    loadFileTemplate,
    withDefault = 1200,
    heightDefault = 800,
    iconDefault = path.join('./images/IVAO_Logo.png'),
    titleDefault = 'IvaFly'
) {
    win = new BrowserWindow({
        width: withDefault,
        height: heightDefault,
        icon: iconDefault,
        title: titleDefault,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, //lancement dans les autres fenetre
            plugins: true,
        },
    })

    /**
     * ouverture des codes sources en version devs
     */

    win.loadFile(loadFileTemplate)

    // Handle window closed
    win.on('closed', () => {
        win = null
    })

    return win
}

// Close App
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    app.allowRendererProcessReuse = true
    Mainwindows = createWindow('./src/home/home.html')
})

ipcMain.on('welcome', (EventTarget, arg) => {
    const users = local + '/users.json'

    if (users['account'] == null) {
        Mainwindows = createWindow('./src/account/creataccount.html', 600, 480, null, 'Add account')
    } else {
        Mainwindows = createWindow('./src/account/account.html', 600, 480, null, 'my account')
    }
})

ipcMain.on('discord', (EventTarget, arg) => {
    const { discord } = require('./function/discord')
    discord()
})

ipcMain.on('atchtml', (EventTarget, arg) => {
    const { discord } = require('./function/discord')
    discord()
})

ipcMain.on('friendbutton', (EventTarget, arg) => {
    Mainwindows = createWindow('./src/friend/friend.html',  'Add friend')
})
