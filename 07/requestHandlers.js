var exec = require("child_process").exec;

function start() {
    console.log("Request Handler 'start' was called.");

    var conent = "empty";
    exec("find /",function(error,stdout,stderr){
        conent = stdout;
    })


    return conent;
}

function upload() {
    console.log("Request Handler 'upload' was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
