const { shell, ipcRenderer } = require('electron')
const $ = require('jquery')
const os = require('os')
const { preferencie } = require(os.homedir() + '/AppData/Local/ivafly/users.json')
const { users } = require(os.homedir() + '/AppData/Local/ivafly/users.json')
const { lang } = require('../../logs-data/lang/langage')
const { Notification } = require('electron')
const { update } = require('../../function/update')
const { online } = require('../../logs-data/online/online')
const { data: ivaoData } = require('../../ivao/api-ivao.json')
const { arrival, departure } = require('../../function/pilote2')
const console = require('console')

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
$('#fly').hide()

$('#welcome').html(lang(preferencie.lang).sentences['welcome-message'])

if (users['account'] == true) {
    $('#username').html(users['username'])
} else {
    $('#username').hide()
}

//TODO: format search data

$('#platforme').on('click', () => {
    const icao = document.getElementById('icao').value
    const { atc } = require('../../function/atc')
    atc(icao).then(() => {
    arrival(ivaoData.dataplatedorme + icao)
    departure(ivaoData.dataplatedorme + icao)
})})