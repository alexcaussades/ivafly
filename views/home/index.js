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
 * Navbar
 */

$('#navbar').load("navbar.html")

$('#result').hide()


$('#rrr').html(lang(preferencie["lang"]).words["submit"])
$('#welcome').html(lang(preferencie.lang).sentences['welcome-message'])

$('#platforme').on('click', () => {
  const metar = ivaoData.metar
  const platform = ivaoData.dataairport
  $('#result').show();
  fetch(platform + "lfbl", { method: 'GET'})
    .then(res => res.json()) // expecting a json response
    .then(json => console.log(json));

});