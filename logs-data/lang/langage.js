/**
 * choise the langague
 * */

function lang(value = 'fr') {
    if (value === 'fr') {
        const fr = require('./app-dic-fr.json')
        return fr
    } else {
        const en = require('./app-dic-en.json')
        return en
    }
}

module.exports = {
    lang,
}
