//第01个版本，不需要index.js,直接node server.js即可启动，然后访问Http://127.0.0.1:8888即可

var http = require("http");

http.createServer(function(request,response){
    response.writeHead(
        200,
        {"Content-Type":"text/plain"}
    );
    response.write("Hello Node JS");
    response.end();
}).listen(8888);
