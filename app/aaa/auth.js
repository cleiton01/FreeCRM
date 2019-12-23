const LoginDao = require('./node_modules');

class CustomAuth{

    constructor(login, passwd){
        this._login = login;
        this._passwd = passwd;
    }

    authenticate(){

        if (!this._login){
            console.log("Login invalido, este campo nao pode ser vazio");
            return "faha login"
        }

        if(!this._passwd){
            console.log("Senha invalida, este campo nao pode ser vazio");
            return "faha login"
        }

        var loginDao = new LoginDao(this._login, this._passwd)
        loginDao.validate();
        // loginDao 

    }



}