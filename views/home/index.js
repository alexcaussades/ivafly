const {app, BrowserWindow, ipcMain, shell} = require('electron');
const webPreferences = require('../../webPreferences')
//const {dialog, Menu, MenuItem, getCurrentWindow} = require('electron').remote;
const {data: ivaoData} = require("../../ivao/api-ivao.json")
const $ = require('jquery')
const fetch = require('node-fetch');
const {versionapp, urlrelease} = require('../../logs-data/version/version');
const {preferencie} = require('../../logs-data/users/users.json')
const {lang} = require('../../logs-data/lang/langage')
const axios = require("axios")
const urlApi = 'https://alexcaussades.com/api-ivao/'
const { Notification } = require('electron')

/**
 *  News Version 
 */
axios.get(urlApi)
  .then(function (response) {
    const version_dist = response.data.version_app;
    function openurl(value){
      return shell.openExternal(value)
    }
    if (versionapp() != version_dist){
    $('#version').show()
    $('#version').html(lang(preferencie['lang']).sentences["new-version-available"] + " <a href='' class='alert-link' id='new-download'>"+ lang(preferencie['lang']).sentences["click-to-link"]+"</a>")
    //shell.openExternal(urlrelease())
    $("#new-download").on("click", () =>{
      openurl(urlrelease())
    })
  }
})

/**
 * Users setting default 
 */

/**
 * Notification 
 */

 function showNotification (tileNotification = 'Iva-Fly', bodyNotification ) {
  const NOTIFICATION_TITLE = tileNotification
  const NOTIFICATION_BODY = bodyNotification
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}

/**
 * Navbar
 */

$('#navbar').load("navbar.html")

$('#result').hide()


$('#rrr').html(lang(preferencie["lang"]).words["submit"])
$('#welcome').html(lang(preferencie.lang).sentences['welcome-message'])

$('#platforme').on('click', () => {
    const platform = ivaoData.dataairport
    $('#result').show();
    axios.get(platform + 'EGSS')
    .then(function (response) {
      const {data} = response
      $('#nameAiport').html(data["nameAirport"])
      $('#icao').html("("+data["icao"]+")")
      $('#weather').html(data["weather"]["metar"])
      $('#weather2').html(data["weather"]["taf"])
      $('#resultsdeparture').html(data["resultsdeparture"])
      $('#resultsarrival').html(data["resultsarrival"])
      $('#totalAtc').html(data["totalATC"])
      $('#totalfly').html(data["totalfly"])
      axios.get("https://alexcaussades.com/api-ivao/atc.php?icao=EGSS")
      .then(function (response2){
        const {data} = response2
        if (data["data"]["app"]["Callsign"] != null){
          $('#app').show()
          $('#AppCallsign').html(data["data"]["app"]["Callsign"] + " " + data["data"]["app"]["Frequency"] + " MHz")
          $('#AppAtis').html("Atis: "+data["data"]["app"]["Atis"])
        }
        if (data["data"]["twr"]["Callsign"] != null){
          $('#twr').show()
          $('#twrCallsign').html(data["data"]["twr"]["Callsign"] + " " + data["data"]["twr"]["Frequency"] + " MHz")
          $('#twrAtis').html("Atis: "+data["data"]["twr"]["Atis"])
        }
        if (data["data"]["gnd"]["Callsign"] != null){
          $('#gnd').show()
          $('#gndCallsign').html(data["data"]["gnd"]["Callsign"] + " " + data["data"]["gnd"]["Frequency"] + " MHz")
          $('#gndAtis').html("Atis: "+data["data"]["gnd"]["Atis"])
        }
        if (data["data"]["del"]["Callsign"] != null){
          $('#del').show()
          $('#delCallsign').html(data["data"]["del"]["Callsign"] + " " + data["data"]["del"]["Frequency"] + " MHz")
          $('#delAtis').html("Atis: "+data["data"]["del"]["Atis"])
        }
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

});