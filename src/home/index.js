const { shell, ipcRenderer } = require('electron')
const $ = require('jquery')
const os = require('os')
const { preferencie } = require(os.homedir() + '/AppData/Local/ivafly/users.json')
const { users } = require(os.homedir() + '/AppData/Local/ivafly/users.json')
const { lang } = require('../../logs-data/lang/langage')
const { Notification } = require('electron')
const { update } = require('../../function/update')
const { online } = require('../../logs-data/online/online')
const { searchflyplateforme } = require('../../function/pilote')
const pilote2 = require('../../function/pilote2')
const { data: ivaoData } = require('../../ivao/api-ivao.json')

/**
 *  News Version
 */
update()

/**
 * Navbar
 */

$('#navbar').load('../assets/navbar.html')

online(users.vid)

$('#result').hide()

$('#welcome').html(lang(preferencie.lang).sentences['welcome-message'])

if (users['account'] == true) {
    $('#username').html(users['username'])
} else {
    $('#username').hide()
}

$('#atchtml').on('click', () => {
    ipcRenderer.send('atchtml')
})

$('#friendbutton').on('click', () => {
    ipcRenderer.send('friendbutton')
})


