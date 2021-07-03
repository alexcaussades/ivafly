const { data } = require('../logs-data/version/version.json')
const { shell, ipcRenderer } = require('electron')

function openurl(value) {
    return shell.openExternal(value)
}

function urldiscord() {
    return data.urldiscord
}

function discord() {
    openurl(urldiscord())
}

module.exports = {
    discord,
}
