//项目启动主文件
var server = require("./server");
var router = require("./router");

server.start(router.route);
