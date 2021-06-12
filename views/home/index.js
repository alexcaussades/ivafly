const {app, BrowserWindow, ipcMain} = require('electron');
const webPreferences = require('../../webPreferences')
//const {dialog, Menu, MenuItem, getCurrentWindow} = require('electron').remote;
const {data: ivaoData} = require("../../ivao/api-ivao.json")
const $ = require('jquery')
const fetch = require('node-fetch');
const version = require('../../logs-data/version.json');


function lang(value = "fr"){

  if(value === "fr"){
    const fr = require("../../logs-data/lang/app-dic-fr.json")
    return fr
  }else{
    const en = require("../../logs-data/lang/app-dic-en.json")
    return en
  }

}


$('#result').hide()

$('#version').html('Version: ' + version.data.version)

$('#rrr').html(lang("fr").words.submit)
$('#welcome').html(lang('fr').sentences['welcome-message'])

$('#platforme').on('click', () => {
  const metar = ivaoData.metar
  const platform = ivaoData.dataairport
  $('#result').show();
  fetch(platform + "lfbl", { method: 'GET'})
    .then(res => res.json()) // expecting a json response
    .then(json => console.log(json));

});