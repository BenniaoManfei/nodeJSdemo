
//路由文件
function route(handle,pathname){
    console.log("About to route a request for "+pathname);
    if(typeof handle[pathname]==='function'){
        return handle[pathname]();
    } else {
        console.error("No request handler found for "+pathname);
        return "404 NOT FOUND"
    }
}


exports.route = route;
