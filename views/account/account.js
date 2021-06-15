const {shell} = require('electron');
const $ = require('jquery')
const {preferencie} = require('../../logs-data/users/users.json')
const {lang} = require('../../logs-data/lang/langage')
const { Notification } = require('electron')
const {update} = require("../../function/update")


//store.set('unicorn', '🦄');


/**
 *  News Version 
 */

update()

/**
 * Navbar
 */

$('#navbar').load("../assets/navbar.html")

$('#result').hide()

$('#welcome').html(lang(preferencie.lang).sentences['welcome-message'])
//$("#welcome").html(store.get('unicorn'))

$("#platforme").on('click', () => {
    const icao = document.getElementById("icao").value
    const {atc} = require("../../function/atc")
    atc(icao)  
});