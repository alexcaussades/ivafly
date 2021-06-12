const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('ivafly.db');
/**
 * 
 * @param {lang} value 
 * @returns lang
 */

function lang(value = "fr"){

  if(value === "fr"){
    const fr = require("./logs-data/lang/app-dic-fr.json")
    return fr
  }else{
    const en = require("./logs-data/lang/app-dic-en.json")
    return en
  }

}


module.exports = {
  lang
}