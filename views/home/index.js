const {shell, ipcRenderer} = require('electron');
const $ = require('jquery')
const os = require('os');
const {preferencie} = require(os.homedir()+"/AppData/Local/ivafly/users.json")
const {users} = require(os.homedir()+"/AppData/Local/ivafly/users.json")
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

if(users["account"] == true){
    $('#username').html(users["username"])
}else{
    $('#username').hide()
}



$("#platforme").on('click', () => {
    icao = document.getElementById("icao").value
    const {atc} = require("../../function/atc")
    atc(icao)
    
});
