const sqlite3 = require('sqlite3').verbose()
const os = require('os')
const friend = os.homedir() + '/AppData/Local/ivafly/friend/'
const pdo = new sqlite3.Database(friend + 'friend.db')

/**
 * 
 */

function addfriends() {

    pdo.close()
}

module.exports = {
    addfriends,
}
