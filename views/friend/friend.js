const { shell, ipcRenderer } = require('electron')
const $ = require('jquery')
const os = require('os')
const { preferencie } = require(os.homedir() + '/AppData/Local/ivafly/users.json')
const { users } = require(os.homedir() + '/AppData/Local/ivafly/users.json')
const { lang } = require('../../logs-data/lang/langage')
const { Notification } = require('electron')
const { update } = require('../../function/update')
const { online } = require('../../logs-data/online/online')
const { addfriends } = require('../../logs-data/friend/addfriends')
const console = require('console')
const { searchfriend } = require('../../logs-data/friend/friend')

/**
 *  News Version
 */
update()

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

console.log(searchfriend())
