const sqlite3 = require('sqlite3').verbose()
const os = require('os')
const { lang } = require('../lang/langage')
const { online } = require('../online/online')
const friend = os.homedir() + '/AppData/Local/ivafly/friend/'
const pdo = new sqlite3.Database(friend + 'friend.db')

function searchfriend() {
    pdo.get(`SELECT count(*) FROM friend`, function (err, row) {
        if (row['count(*)']) {
            const count = row['count(*)']
            return count
        }
    })
}

function online_friend() {
    for (let i = 1; i <= searchfriend(); i++) {
        pdo.get(`SELECT * FROM friend WHERE id = ?`, [i], function (error, row) {
            if (row) {
                //TODO: ecrire une function de rechcherche dans APIs 
                online(row.vid)
            }
        })
    }
}

module.exports = {
    searchfriend,
    online_friend,
}
