const axios = require('axios')
const { data: ivaoData } = require('../ivao/api-ivao.json')

function searchflyplateforme(icao) {
    axios.get(ivaoData.dataplatedorme + icao).then(function (response) {
        const { data } = response
        if (data.data['arr']['total'] != 0) {
            let total = data.data['arr']['total']
            for (let i = 0; i < total; i++) {
                const arr = data.data['arr']
                const callsign = arr[i]['callsign']
                const FlightplanDepartureAerodrome = arr[i]['FlightplanDepartureAerodrome']
                const FlightplanDestinationAerodrome = arr[i]['FlightplanDestinationAerodrome']
                const FlightplanCruisingLevel = arr[i]['FlightplanCruisingLevel']
                const route = arr[i]['route']
                
            }
        }
        if (data.data['dep']['total'] != 0) {
            let total = data.data['dep']['total']
            for (let i = 0; i < total; i++) {
                const dep = data.data['dep']
                const callsign = dep[i]['callsign']
                const FlightplanDepartureAerodrome = dep[i]['FlightplanDepartureAerodrome']
                const FlightplanDestinationAerodrome = dep[i]['FlightplanDestinationAerodrome']
                const FlightplanCruisingLevel = dep[i]['FlightplanCruisingLevel']
                const route = dep[i]['route']
            }
        }
    })
}

module.exports = {
    searchflyplateforme,
}
