const moment = require('moment');
moment.locale('es');

class PasTime {

    constructor() {
        this.created = moment().format('LLLL');
        console.log(this);
    }

}

module.exports = {
    PasTime
};