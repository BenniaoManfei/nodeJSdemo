//版本04
var http = require("http");
var url = require("url");

function start(route,handle) {
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for "+ pathname+" received.");

        route(handle,pathname);

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
