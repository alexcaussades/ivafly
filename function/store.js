const Store = require('electron-store');
const store = new Store();


function setstore(tilte, value){
    store.set(tilte, value);
}


function getstore(tilte){
    store.get(tilte)
}

module.exports = {
    setstore,
    getstore
}