
//路由文件
function route(handle,pathname,response,postData){
    console.log("About to route a request for "+pathname);
    if(typeof handle[pathname]==='function'){
        return handle[pathname](response,postData);
    } else {
        console.error("No request handler found for "+pathname);
        response.writeHead(
            404,
            {"Content-Type":"text/plain"}
        );
        response.write("404 NOT FOUND");
        response.end();
    }
}


exports.route = route;
