//第02个版本，不需要index.js,直接node server.js即可启动，然后访问Http://127.0.0.1:8888即可
var http = require("http");

function start() {
    function onRequest(request,response){
        console.log("Request for "+ pathname+" received.");
        console.log("request received.");
        response.writeHead(
            200,
            {"Content-Type":"text/plain"}
        );
        response.write("Hello World2");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.8888端口被监听");
}
exports.start = start;
