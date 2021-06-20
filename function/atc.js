const axios = require("axios")
const {data: ivaoData} = require("../ivao/api-ivao.json")
const {vac} = require("../ivao/vac/vac")


function openurl(value){
    return shell.openExternal(value)
  }

async function atc(icao){
    const platform = ivaoData.dataairport
    $('#result').show();

    axios.get(platform + icao)
    .then(function (response) {
      const vacchart = vac(icao)
      const {data} = response
      $('#nameAiport').html(data["nameAirport"])
      $('#icao').html("("+data["icao"]+")")
      $('#weather').html(data["weather"]["metar"])
      $('#weather2').html(data["weather"]["taf"])
      $('#resultsdeparture').html(data["resultsdeparture"])
      $('#resultsarrival').html(data["resultsarrival"])
      $('#totalAtc').html(data["totalATC"])
      $('#totalfly').html(data["totalfly"])
      $('#chart').html("<a href='' id='chartvac'><span class='material-icons'>area_chart</span></a>")
      $("#chartvac").on("click", () =>{
        openurl(vacchart)
      })
      
      axios.get(ivaoData.dataatc+ icao)
      .then(function (response2){
        const {data} = response2
        if (data["data"]["app"]["Callsign"] != null){
          $('#app').show()
          $('#AppCallsign').html(data["data"]["app"]["Callsign"] + " " + data["data"]["app"]["Frequency"] + " MHz")
          $('#AppAtis').html("Atis: "+data["data"]["app"]["Atis"])
        }
        if (data["data"]["twr"]["Callsign"] != null){
          $('#twr').show()
          $('#twrCallsign').html(data["data"]["twr"]["Callsign"] + " " + data["data"]["twr"]["Frequency"] + " MHz")
          $('#twrAtis').html("Atis: "+data["data"]["twr"]["Atis"])
        }
        if (data["data"]["gnd"]["Callsign"] != null){
          $('#gnd').show()
          $('#gndCallsign').html(data["data"]["gnd"]["Callsign"] + " " + data["data"]["gnd"]["Frequency"] + " MHz")
          $('#gndAtis').html("Atis: "+data["data"]["gnd"]["Atis"])
        }
        if (data["data"]["del"]["Callsign"] != null){
          $('#del').show()
          $('#delCallsign').html(data["data"]["del"]["Callsign"] + " " + data["data"]["del"]["Frequency"] + " MHz")
          $('#delAtis').html("Atis: "+data["data"]["del"]["Atis"])
        }
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

module.exports = {
    atc
}