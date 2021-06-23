const {ipcRenderer} = require('electron');
const $ = require('jquery')
const {preferencie} = require('../../logs-data/users/users.json')
const {users} = require('../../logs-data/users/users.json')
const {lang} = require('../../logs-data/lang/langage')
const fs = require("fs")


$('#username').html(lang(preferencie.lang).sentences["Name-Account"] + users["username"])
$('#token').html(lang(preferencie.lang).sentences["Email-Adress"] + users["token"])
$('#vid').html(lang(preferencie.lang).sentences["Vid-Account"] + users["vid"])