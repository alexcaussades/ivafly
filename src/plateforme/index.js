const { app, BrowserWindow, ipcMain } = require('electron')
//const {dialog, Menu, MenuItem, getCurrentWindow} = require('electron').remote;
const { data: ivaoData } = require('../../ivao/api-ivao.json')
const $ = require('jquery')
const fetch = require('node-fetch')
const version = require('../../logs-data/version.json')
