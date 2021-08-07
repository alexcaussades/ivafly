const { shell, ipcRenderer } = require('electron')
const $ = require('jquery')
const os = require('os')
const { preferencie } = require(os.homedir() + '/AppData/Local/ivafly/users.json')
const { users } = require(os.homedir() + '/AppData/Local/ivafly/users.json')
const { lang } = require('../../logs-data/lang/langage')
const { Notification } = require('electron')
const { update } = require('../../function/update')
const { online } = require('../../logs-data/online/online')

/**
 *  News Version
 */
update()

/**
 * Navbar
 */

$('#navbar').load('../assets/navbar.html')

/**
 * recherche de l'utilisateur en ligne
 **/

//online(users.vid)

$('#result').hide()

$('#welcome').html(lang(preferencie.lang).sentences['welcome-message'])

if (users['account'] == true) {
    $('#username').html(users['username'])
} else {
    $('#username').hide()
}

//TODO: add a function to check if the user is connected to the internet

$('#atchtml').on('click', () => {
    ipcRenderer.send('atchtml')
})

$('#friendbutton').on('click', () => {
    ipcRenderer.send('friendbutton')
})
