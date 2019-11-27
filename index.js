const app = require('./config/config')();
const http = require('http');
const server = http.createServer(app);

server.listen(3000,function(){
    console.log("Servidor iniciado com sucesso");
});