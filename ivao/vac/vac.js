const { datedata } = require("./airac.json");

function vac(args){
    const date = new Date();
    const getDateMonth = date.getMonth();
    const setDateMonth = +getDateMonth +1;
    const getDateDay = date.getDate();
    const VerifyDate = datedata.number.data[getDateMonth].id;
    const url = "https://www.sia.aviation-civile.gouv.fr/dvd/eAIP_";
    const url2 = "/Atlas-VAC/PDF_AIPparSSection/VAC/AD/AD-2.";
    const pdf = ".pdf";
    const tiret = "_";
    const UpercaseArgs = args.toString().toUpperCase();

    if (datedata.number.data[setDateMonth].day <= getDateDay ){
            
            let day = datedata.number.data[setDateMonth].day;
            let month = datedata.number.data[setDateMonth].month;
            let year = datedata.number.data[setDateMonth].year;
            let airac = datedata.number.data[setDateMonth].airac;
            let file =
                url + day + tiret + month + tiret + year + url2 + UpercaseArgs + pdf;
            return file         
    } 
        else if (datedata.number.data[setDateMonth]["day"] < getDateDay) {
            const NewMonth = datedata.number.data[getDateMonth].id;
            const DataMoin = +NewMonth.id - 1;
            if (DataMoin) {
            let NewMonth = datedata.number.data[getDateMonth].id;
                let day = datedata.number.data[DataMoin].day;
                let month = datedata.number.data[DataMoin].month;
                let year = datedata.number.data[DataMoin].year;
                let airac = datedata.number.data[DataMoin].airac;
                console.log('date2', airac)
                let file =
                    url + day + tiret + month + tiret + year + url2 + UpercaseArgs + pdf;
                console.log(file)
                    return file
            }
        }
}

module.exports = {
    vac
}