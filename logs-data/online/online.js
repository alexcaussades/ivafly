const datas = require('../../ivao/api-ivao.json')
const axios = require('axios')

function online(value) {
    const searchVid = 'https://alexcaussades.com/api-ivao/vid.php?vid='
    const urlvid = searchVid + value
    axios
        .get(urlvid)
        .then(function (response) {
            // handle success
            let { data } = response.data
            if (data.atc['Callsign'] != null || data.pilot['callsign'] != null) {
                $('#online').show()
                $('#online').html(
                    '<img class="active" src="../../images/outline_online_prediction_white_24dp.png"> Online'
                )
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error)
        })
        .then(function () {
            // always executed
        })
}

function onlineFriendsUsers(value) {
    const searchVid = 'https://alexcaussades.com/api-ivao/vid.php?vid='
    const urlvid = searchVid + value
    axios
        .get(urlvid)
        .then(function (response) {
            // handle success
            let { data } = response.data
            if (data.atc['Callsign'] != null) {
                const atc_callsign = data.atc['Callsign']
                const atc_vid = data.atc['Vid']
                $('#callsing').html(atc_callsign)
                //TODO: revoir le code
            }
            if (data.pilot['callsign'] != null) {
                const pilot_callsign = data.pilot['callsign']
                const pilot_vid = data.pilot['Vid']
                
            }
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
    onlineFriendsUsers,
}
