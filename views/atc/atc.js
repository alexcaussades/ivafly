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

online(users.vid)

$('#result').hide()
$('#fly').hide()

$('#welcome').html(lang(preferencie.lang).sentences['welcome-message'])

if (users['account'] == true) {
    $('#username').html(users['username'])
} else {
    $('#username').hide()
}

$('#platforme').on('click', () => {
    const icao = document.getElementById('icao').value
    const { atc } = require('../../function/atc')
    if (icao.length === 4) {
        $('#result').show()
        atc(icao)

        if (preferencie.autoload == true) {
            setInterval(() => {
                const atcform = document.getElementById('atcform')
                atcform.reset()
                $('#departure').html('')
                $('#arrival').html('')
                $('#totalarrival').html('')
                $('#totaldeparture').html('')
                atc(icao)
            }, 60000)
        }
    }
})
