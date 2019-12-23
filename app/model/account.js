
const date = require('date-and-time');

class Account{
    /*
    company Size
    company sector
    annual revenue

    register
    last update
    */
    constructor(name, identifier, is_headquarter){
        let datetime = date.format(new date(), 'DD/MM/YYYY HH:mm:ss');

        this._name = name;
        this._identifier = identifier;
        this._date = datetime;
        this._is_headquarter = is_headquarter;
        this._system_id = get_last_system_id();
        this._last_update = datetime;
    }

    get name(){
        return this._name;
    }

    get identifier(){
        return this._identifier;
    }
    
    set name(name){
        this._name = name;
    }

    get_last_system_id(){
        return 1;
    }




}

module.exports = Account;