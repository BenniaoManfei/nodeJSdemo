var exec = require("child_process").exec;

function start(response) {
    console.log("Request Handler 'start' was called.");

    var conent = "empty";
    exec(
        "find /",
        {timeout:10000,maxBuffer:20000*1024},
        function(error,stdout,stderr){
        response.writeHead(
            200,
            {"Content-Type":"text/plain"}
        );
        response.write(stdout);
        response.end();
    })


    return conent;
}

function upload(response) {
    console.log("Request Handler 'upload' was called.");
    response.writeHead(
        200,
        {"Content-Type":"text/plain"}
    );
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;
