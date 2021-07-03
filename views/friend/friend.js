const { shell, ipcRenderer } = require('electron')
const $ = require('jquery')
const os = require('os')
const { preferencie } = require(os.homedir() + '/AppData/Local/ivafly/users.json')
const { users } = require(os.homedir() + '/AppData/Local/ivafly/users.json')
const { lang } = require('../../logs-data/lang/langage')
const { online } = require('../../logs-data/online/online')
const { addfriends } = require('../../logs-data/friend/addfriends')

/**
 * Navbar
 */

$('#navbar').load('../assets/navbar.html')

online(users.vid)

$('#friend').on('click', () => {
    const vid = document.getElementById('vid').value
    const name = document.getElementById('name').value
    addfriends(vid, name)
})
