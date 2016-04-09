var http = require("http");
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello world\n' + Date.now());
    
}).listen(6688);
console.log('sever listening at http://localhost:6688/');