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

<<<<<<< HEAD:views/home/index.js
online(users.vid)
=======
/**
 * recherche de l'utilisateur en ligne
 **/

//online(users.vid)
>>>>>>> devs:src/home/index.js

$('#result').hide()

$('#welcome').html(lang(preferencie.lang).sentences['welcome-message'])

if (users['account'] == true) {
    $('#username').html(users['username'])
} else {
    $('#username').hide()
}

<<<<<<< HEAD:views/home/index.js
=======
//TODO: add a function to check if the user is connected to the internet

>>>>>>> devs:src/home/index.js
$('#atchtml').on('click', () => {
    ipcRenderer.send('atchtml')
})

$('#friendbutton').on('click', () => {
    ipcRenderer.send('friendbutton')
})
<<<<<<< HEAD:views/home/index.js


=======
>>>>>>> devs:src/home/index.js
