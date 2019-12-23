const md5 = require('md5');

class Lead{

    constructor(lead_name, lead_phone, lead_email, lead_company_name, lead_custom_parans){
        this.lead_create_date = new Date();
        this.lead_name = lead_name;
        this.lead_phone = lead_phone;
        this.lead_email = lead_email;
        this.lead_company_name = lead_company_name;
        this.lead_custom_parans = lead_custom_parans;
        this.lead_id = `${this.lead_create_date.getFullYear()}-${this.lead_create_date.getMonth()}-${this.lead_create_date.getDay()}-${md5(this.lead_company_name)}`;
    }



}

module.exports = Lead;