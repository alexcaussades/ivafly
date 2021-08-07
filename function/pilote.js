const axios = require('axios')
const { data: ivaoData } = require('../ivao/api-ivao.json')

<<<<<<< HEAD
=======


/**
 * @deprecated the function is not used anymore
 * @author alexandre Caussades <me@alexcaussades.com>
 * @copyright 2021 
*/


>>>>>>> devs
function searchflyplateforme(icao) {
    axios.get(ivaoData.dataplatedorme + icao).then(function (response) {
        const { data } = response
        if (data.data['arr']['total'] != 0) {
            const total = data.data['arr']['total']
            console.log(total)

            for (let i = 0; i < total; i++) {
                const arr = data.data['arr']
                const arr_callsign = [arr[[i]]['callsign']]
                const arr_FlightplanDepartureAerodrome = arr[[i]]['FlightplanDepartureAerodrome']
                const arr_FlightplanDestinationAerodrome = arr[[i]]['FlightplanDestinationAerodrome']
                const arr_FlightplanCruisingLevel = arr[[i]]['FlightplanCruisingLevel']
                const arr_route = arr[[i]]['route']
                arr_callsign.forEach((currentValue) => $('#test').append(currentValue + '<br>'))
                arr_FlightplanDepartureAerodrome.forEach((currentValue) => $('#a').append(currentValue + '<br>'))
                //$('#test').append('<th scope="row">' + arr_callsign + ' </th>')
                //$('#a').append('<td>' + arr_FlightplanDepartureAerodrome + ' </td>')
                //$('#b').append('<td>' + arr_FlightplanCruisingLevel + ' </td>')
                //$('#c').append('<td>' + arr_FlightplanDestinationAerodrome + ' </td>')
            }
        }
        if (data.data['dep']['total'] != 0) {
            const total = data.data['dep']['total']
            for (let i = 0; i < total; i++) {
                const dep = data.data['dep']
                const dep_callsign = dep[i]['callsign']
                const dep_FlightplanDepartureAerodrome = dep[i]['FlightplanDepartureAerodrome']
                const dep_FlightplanDestinationAerodrome = dep[i]['FlightplanDestinationAerodrome']
                const dep_FlightplanCruisingLevel = dep[i]['FlightplanCruisingLevel']
                const dep_route = dep[i]['route']
            }
        }
    })
}

module.exports = {
    searchflyplateforme,
}