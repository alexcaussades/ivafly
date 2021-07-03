const { data } = require('../../ivao/api-ivao.json')
const axios = require('axios')

function friend(vid) {
    const vid = vid
    const serachVid = data.datavid

    axios
        .get(serachVid + vid)
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
    friend,
}
