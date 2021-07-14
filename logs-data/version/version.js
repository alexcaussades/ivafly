const version = require('./version.json')
const axios = require('axios')
const urlApi = 'https://alexcaussades.com/api-ivao/index.php'

function versionapp() {
    return version.data.verifVersion
}

function urlrelease() {
    return version.data.urlReleases
}

module.exports = {
    versionapp,
    urlrelease,
}
