//const sqlite3 = require('sqlite3').verbose()
const os = require('os')
const { lang } = require('../lang/langage')
const { online, onlineFriendsUsers } = require('../online/online')
const friend = os.homedir() + '/AppData/Local/ivafly/friend/'
//const pdo = new sqlite3.Database(friend + 'friend.db')
const axios = require('axios')

function searchfriend() {
    pdo.get(`SELECT count(*) FROM friend`, function (err, row) {
        if (row['count(*)']) {
            const count = row['count(*)']
            for (let i = 1; i <= count; i++) {
                pdo.get(`SELECT * FROM friend WHERE id = ?`, [i], function (error, row) {
                    if (row) {
                        //TODO: write function search for APIs
                        const searchVid = 'https://alexcaussades.com/api-ivao/vid.php?vid='
                        const urlvid = searchVid + row.vid
                        axios
                            .get(urlvid)
                            .then(function (response) {
                                // handle success
                                let { data } = response.data
                                if (data.atc['Callsign'] != null) {
                                    const atc_callsign = data.atc['Callsign']
                                    const atc_vid = data.atc['Vid']
                                    $('#callsing').html(atc_callsign)
                                    //TODO: revoir le code
                                }
                                if (data.pilot['callsign'] != null) {
                                    const pilot_callsign = data.pilot['callsign']
                                    const pilot_vid = data.pilot['Vid']
                                    $('#callsing').html(pilot_callsign)
                                }
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error)
                            })
                            .then(function () {
                                // always executed
                            })
                    }
                })
            }
        }
    })
}

function online_friend() {}

module.exports = {
    searchfriend,
    online_friend,
}
