const {shell} = require('electron');
const $ = require('jquery')
const {preferencie} = require('../../logs-data/users/users.json')
const {lang} = require('../../logs-data/lang/langage')
const { Notification } = require('electron')
const {update} = require("../../function/update")




/**
 *  News Version 
 */

update()

/**
 * Navbar
 */

$('#navbar').load("navbar.html")

$('#result').hide()

$('#welcome').html(lang(preferencie.lang).sentences['welcome-message'])


$("#platforme").on('click', () => {
    const icao = document.getElementById("icao").value
    const {atc} = require("../../function/atc")
    atc(icao)  
});