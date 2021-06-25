const {ipcRenderer} = require('electron');
const $ = require('jquery')
const {preferencie} = require('../../logs-data/users/usersDefault.json')
const os = require('os');
const path = require("path");
const local = os.homedir()+"/AppData/Local/ivafly"
const {lang} = require('../../logs-data/lang/langage')
const axios = require("axios")
const fs = require("fs")


/**
 * creation du compte utilisateur du logiciel
 * @description Change les information du langague / Enrgistre le E-mail - Name - VID
 * @callback token : ID
 * @author Alexandre Caussades 
 */
  

$("#email").html(lang(preferencie.lang).sentences["Email-Adress"])
$("#name").html(lang(preferencie.lang).sentences["Name-Account"])
$("#vid").html(lang(preferencie.lang).sentences["Vid-Account"])
$("#langage").html(lang(preferencie.lang).sentences["Langage"])

$("#newaccountsubmit").on('click', () => {
    const emailinput = document.getElementById("emailinput").value
    const nameinput = document.getElementById("nameinput").value
    const vidinput = document.getElementById("vidinput").value
    const langageinput = document.getElementById("langageinput").value

    axios.get("https://alexcaussades.com/api-ivao/account.php?name="+nameinput+"&email="+emailinput+"&vid="+vidinput).then(function (response){
        
        const userId = response.data["userId"]
        const token = response.data["token"]
        
        let profil = {
            users: {
                userid: userId,
                username: nameinput,
                token: token,
                vid: vidinput,
                email: emailinput,
                account: true
            },
            preferencie: {
                lang: langageinput,
                interface: "white"
            }
        }
       let newUsersProfil = JSON.stringify(profil, null, 2)
       fs.writeFile(path.join(local, newUsersProfil), function(error){
            
       })
    })
        
 });
