const Account = require('../model/account');

class Account_controller{

    list_accounts(account_id){
        return [
            {account_id : 1, account_name : "a"},
            {account_id : 2, account_name : "b"},
            {account_id : 3, account_name : "c"},
            {account_id : 4, account_name : "d"},
            {account_id : 5, account_name : "e"} 
        ];
    }

    create_account(){

    }

    update_account_data(){

    }
    
    update_account_responsable(){

    }


}

module.exports = Account_controller;