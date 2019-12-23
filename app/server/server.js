var express = require('express');
const server = express();
const bodyParser = require('body-parser');
server.listen(9001, ()=> {
    console.log('Servidor rodando na porta 9001');
});

server.use(bodyParser.urlencoded({
    extended: true
 }));
server.use(bodyParser.json());


let routes = require('../routes/routes');
routes(server);


