const fs = require('fs')


function getUsersPrefs(){
        let path = './users.json'

        if(path.exists){
            const users = require("./users.json")
            console.log('ok')
            return users
        }else{
            const users = require("./usersDefault.json")
            console.log('no')
            return users
        }
}


module.exports = {
    getUsersPrefs
}