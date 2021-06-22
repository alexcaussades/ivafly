const {ipcRenderer} = require('electron');
const $ = require('jquery')
const {preferencie} = require('../../logs-data/users/users.json')
const {lang} = require('../../logs-data/lang/langage')
const {update} = require("../../function/update")
const axios = require("axios")

update()

$("#email").html(lang(preferencie.lang).sentences["Email-Adress"])
$("#name").html(lang(preferencie.lang).sentences["Name-Account"])
$("#vid").html(lang(preferencie.lang).sentences["Vid-Account"])
$("#langage").html(lang(preferencie.lang).sentences["Langage"])

$("#newaccountsubmit").on('click', () => {
    const emailinput = document.getElementById("emailinput").value
    const nameinput = document.getElementById("nameinput").value
    const vidinput = document.getElementById("vidinput").value
    const langageinput = document.getElementById("langageinput").value

    console.log(emailinput, nameinput, vidinput, langageinput)
});