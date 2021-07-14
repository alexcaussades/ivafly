/** Découpage ATIS atc **/

//const atis = 'eu17.ts.ivao.aero/LFLL_TWR Saint-Ex Tower  Information CHARLIE  recorded at 1116z LFLL 111100Z 34007KT 310V030 9999 SCT036 22/14 Q1018 NOSIG ARR RWY 35R / DEP RWY 35L / TRL FL60 / TA 5000ft RMK WELCOME TO PERPIGNAN / ENGLISH BEGINNER CONFIRM ATIS INFO CHARLIE  on initial contact'

/**
 * @param {string}  value
 * @returns {string}
 * @description returns the active track in the atis
 * @function splitRwyPlateforme
 * @author Alexandre Caussades <me@alexaussades.com>
 */

function splitRwyPlateforme(value) {
    let arrival = atis.split('RWY')
    let rwy_arr = arrival[1].split('/')
    let departure = atis.split('RWY')
    let rwy_dep = departure[2].split('/')
    $('#runway').html('ARR RWY: ' + rwy_arr[0] + '/ DEP RWY: ' + rwy_dep[0])
}
/**
 * @param {string}  value
 * @returns {string}
 * @description returns the TRL in the atis
 * @function splitTRLPlateforme
 * @author Alexandre Caussades <me@alexaussades.com>
 */
function splitTRLPlateforme(value) {
    let trld = atis.split('TRL')
    let trl = trld[1].split('/')
    $('#trl').html('TRL: ' + trl[0])
}

/**
 * @param {string}  value
 * @returns {string}
 * @description returns the TA in the atis
 * @function splitTAPlateforme
 * @author Alexandre Caussades <me@alexaussades.com>
 */

function splitTAPlateforme(value) {
    let tad = atis.split('TA')
    let tadd = tad[1].split('/')
    let taddd = tadd[0].split('RMK')
    $('#ta').html('TA: ' + taddd[0])
}

/**
 * @param {string}  value
 * @returns {string}
 * @description returns the confirm in the atis
 * @function splitConfirmelateforme
 * @author Alexandre Caussades <me@alexaussades.com>
 */
function splitConfirmelateforme(value) {
    let CONFIRM = atis.split('CONFIRM')
    let CONFIRMSPlit = CONFIRM[1].split('/')
    $('#confime').html('CONFIRM: ' + CONFIRMSPlit[0])
}

/**
 * @param {string}  value
 * @returns {string}
 * @description returns the QNH in the atis
 * @function splitInitialcontact
 * @author Alexandre Caussades <me@alexaussades.com>
 */

function splitQNH(value) {
    let QNH = atis.split('Q')
    let QNHsplit = QNH[1].split(' ')
    $('#QNH').html('QNH: ' + CONFIRMSPlit[0])
}

module.exports = {
    splitRwyPlateforme,
    splitTRLPlateforme,
    splitTAPlateforme,
    splitConfirmelateforme,
    splitQNH,
}
