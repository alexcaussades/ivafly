const path = require("path")

module.exports ={
    nodeIntegration: true,
    preload: path.join(__dirname, 'preload.js'),
    contextIsolation: false //lancement dans les autres fenetre
};