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
    let responseForm = $('#icao').val()
    const icao = responseForm
    console.log(icao)
    const { atc } = require('../../function/atc')
    if (icao.length === 4) {
        $('#departure').html('')
        $('#arrival').html('')
        $('#totalarrival').html('')
        $('#totaldeparture').html('')
        $('#app').hide()
        $('#twr').hide()
        $('#gnd').hide()
        $('#del').hide()
        $('#result').show()
        atc(icao)

        if (preferencie.autoload == true) {
            setInterval(() => {
                $('#departure').html('')
                $('#arrival').html('')
                $('#totalarrival').html('')
                $('#totaldeparture').html('')
                $('#app').hide()
                $('#twr').hide()
                $('#gnd').hide()
                $('#del').hide()
                atc(icao)
            }, 60000)
        }
    }
})
