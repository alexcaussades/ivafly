const { data } = require('../../ivao/api-ivao.json')
const axios = require('axios')

function online(value) {
    const searchVid = 'https://alexcaussades.com/api-ivao/vid.php?vid='
    const urlvid = searchVid + value
    axios
        .get(urlvid)
        .then(function (response) {
            // handle success
            console.log(response)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
        })
        .then(function () {
            // always executed
        })
}

module.exports = {
    online,
}
