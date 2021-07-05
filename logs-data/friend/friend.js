const datas = require('../../ivao/api-ivao.json')
const axios = require('axios')

function friend(vid) {
    const serachVid = datas.datavid

    axios
        .get(serachVid + vid)
        .then(function (response) {
            // handle success
            const { data } = response
            return response['status']
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
