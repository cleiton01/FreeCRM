var api = {}
var dataAtual = new Date();
var dataAnterior = new Date();
dataAnterior.setDate(dataAtual.getDate() - 7);
var dateRetrasada = new Date();
dateRetrasada.setDate(dataAtual.getDate() - 14);

var accounts = [
    { account_id: 1234, account_name : "teste", data: dataAtual},
    { account_id: 12345, account_name : "teste2", data: dataAtual}
];
