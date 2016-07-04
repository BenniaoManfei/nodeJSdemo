var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response,request) {
    console.log("Request Handler 'start' was called.");
    var body ='<html>'+
   '<head>'+
   '<meta http-equiv="Content-Type" content="text/html; '+
   'charset=UTF-8" />'+
   '</head>'+
   '<body>'+
   '<form action="/upload" enctype="multipart/form-data" method="post">'+
   '<input type="file" name="upload" />'+
   '<input type="submit" value="Submit text" />'+
   '</form>'+
   '</body>'+
   '</html>';
    response.writeHead(
        200,
        {"Content-Type":"text/html"}
    );
    response.write(body);
    response.end();
}

function upload(response,request) {
    console.log("Request Handler 'upload' was called.");
    var form = new formidable.IncomingForm();
    form.uploadDir = "tmp";

    form.parse(request,function(error,fields,files){
        console.log("parsing done");
        fs.renameSync(files.upload.path,"./tmp/test2.png");
        //缓存文件在C盘，如果程序在其他盘，如果直接使用这个方法，会有权限问题
        //Error: EXDEV: cross-device link not permitted, rename 'C:\Users\ADMINI~1\AppData\Local\Temp\upload_54f237928bc84a4759039a1d32b6c1ca' -> 'D:\NodeJS\nodeJSdemo\13\tmp\test2.png'

        //解决方案，将form的缓存路径定位到tmp：form.uploadDir = "tmp";


        response.writeHead("200",{"Content-Type":"text/html"});
        response.write("Received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}

function show(response,request){
    console.log("Request Handler 'show' was called.");
    fs.readFile(
//        "/tmp/test.png",//D:\tmp\test.png
        "./tmp/test2.png",//D:\NodeJS\nodeJSdemo\12\tmp\test.png
        "binary",
        function(error,file){
            if(error){
                response.writeHead(
                    500,
                    {"Content-Type":"text/plain"}
                );
                response.write(error+"\n");
                response.end();
            } else {
                response.writeHead(
                    200,
                    {"Content-Type":"image/png"}
                );
                response.write(file,"binary");
                response.end();
            }
        }
    );
}

exports.start = start;
exports.upload = upload;
exports.show = show;
