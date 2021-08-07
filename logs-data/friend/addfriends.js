//const sqlite3 = require('sqlite3').verbose()
const os = require('os')
const { lang } = require('../lang/langage')
const friend = os.homedir() + '/AppData/Local/ivafly/friend/'
//const pdo = new sqlite3.Database(friend + 'friend.db')
const { preferencie } = require(os.homedir() + '/AppData/Local/ivafly/users.json')
const { users } = require(os.homedir() + '/AppData/Local/ivafly/users.json')

/**
 * create database
 * */

function creatdatabase() {
    pdo.run(
        'CREATE TABLE IF NOT EXISTS friend(id INTEGER PRIMARY KEY, vid TEXT VARCHAR(255) NOT NULL, name TEXT VARCHAR(255) NOT NULL)'
    )
    pdo.close
}

/**
 * function add friends on the database
*/

function addfriends(vid, name) {
    pdo.get(`SELECT * FROM friend WHERE vid = ?`, [vid], function (err, row) {
        if (row) {
            if (row.vid === vid) {
                return $('#usersExist').html(lang(preferencie.lang).sentences['usersExist'])
            }
        }
        if (!row) {
            pdo.run(`INSERT INTO friend(vid, name) VALUES(?,?)`, [vid, name])
            return $('#usersAdd').html(lang(preferencie.lang).sentences['usersAdd'])
        }
        if (err) {
            console.log(error)
        }
    })
}

module.exports = {
    creatdatabase,
    addfriends,
}
