const axios = require("axios")
const urlApi = 'https://alexcaussades.com/api-ivao/'
const {versionapp, urlrelease} = require('../logs-data/version/version');
const {preferencie} = require('../logs-data/users/users.json')
const {lang} = require('../logs-data/lang/langage')
const { Notification } = require('electron')


function openurl(value){
    return shell.openExternal(value)
  }

function showNotification (bodyNotification) {
    const NOTIFICATION_TITLE = "Iva-Fly"
    const NOTIFICATION_BODY = bodyNotification
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
  }

function update(){
    axios.get(urlApi)
    .then(function (response) {
        const version_dist = response.data.version_app;
        if (versionapp() != version_dist){
        $('#version').show()
        $('#version').html(lang(preferencie['lang']).sentences["new-version-available"] + " <a href='' class='alert-link' id='new-download'>"+ lang(preferencie['lang']).sentences["click-to-link"]+"</a>")
        $("#new-download").on("click", () =>{
        openurl(urlrelease())
        })
    }
    })
}

module.exports = {
    update,
    showNotification
}