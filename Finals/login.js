var http = require('http');
http.createServer(function(requisicao, resposta) { resposta.end("oiii") }).listen(8081);
console.log('servidor ok')