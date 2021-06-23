const {shell, ipcRenderer} = require('electron');
const $ = require('jquery')
const {preferencie} = require('../../logs-data/users/users.json')
const {users} = require('../../logs-data/users/users.json')
const {lang} = require('../../logs-data/lang/langage')
const { Notification } = require('electron')
const {update} = require("../../function/update")

/**
 *  News Version 
 */
update();

/**
 * Navbar
 */

$('#navbar').load("../assets/navbar.html");


$('#result').hide();

$('#welcome').html(lang(preferencie.lang).sentences["welcome-message"]);

if(users.account == true){
    $('#username').html(users['username'])
}else{
    $('#username').hide()
}



$("#platforme").on('click', () => {
    icao = document.getElementById("icao").value
    const {atc} = require("../../function/atc")
    atc(icao)
    
});
