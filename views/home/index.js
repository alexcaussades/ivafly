const {app, BrowserWindow, ipcMain} = require('electron');
const webPreferences = require('../../webPreferences')
//const {dialog, Menu, MenuItem, getCurrentWindow} = require('electron').remote;
const {data: ivaoData} = require("../../ivao/api-ivao.json")
const $ = require('jquery')
const fetch = require('node-fetch');
const version = require('../../logs-data/version.json');
const { lang } = require('../../preload');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('ivafly.db');



$('#result').hide()

$('#version').html('Version: ' + version.data.version)



$('#platforme').on('click', () => {
  const metar = ivaoData.metar
  const platform = ivaoData.dataairport
  $('#result').show();
  fetch(platform + "lfbl", { method: 'GET'})
    .then(res => res.json()) // expecting a json response
    .then(json => console.log(json));

});