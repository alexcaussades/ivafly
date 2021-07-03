/*
 * tableau de données sur une rechche get via axios en json
 */
const axios = require('axios')

function arrival(url, icao) {
    axios.get(url + icao).then(function (response) {
        const { data } = response
        if (data.data['arr'].total > 0) {
            $('#totalarrival').html(data.data['arr'].total)
            for (let i = 0; i < data.data['arr'].total; i++) {
                $('#arrival').append(
                    '<ul class="list-inline"></ul><li class="list-inline-item">' +
                        data.data['arr'][i].callsign +
                        '</li>'
                )
            }
        }
    })
}

function departure(url, icao) {
    axios.get(url + icao).then(function (response) {
        const { data } = response
        if (data.data['dep'].total > 0) {
            $('#totaldeparture').html(data.data['dep'].total)
            for (let i = 0; i < data.data['dep'].total; i++) {
                $('#departure').append(
                    '<ul class="list-inline"></ul><li class="list-inline-item">' +
                        data.data['dep'][i].callsign +
                        '</li>'
                )
            }
        }
    })
}

module.exports = {
    arrival,
    departure,
}
