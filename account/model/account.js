
const date = require('date-and-time');

class account{
    /*
    company Size
    company sector
    annual revenue

    register
    last update 
    system ID
    */
    constructor(name, identifier, is_headquarter){
        this._name = name;
        this._identifier = identifier;
        this._date = date.format(new date(), 'DD/MM/YYYY HH:mm:ss');
        this._is_headquarter = is_headquarter;
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




}