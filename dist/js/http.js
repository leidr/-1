"use strict";var http=require("http"),server=http.createServer();server.listen(8008),server.on("request",function(e,r){r.end("你好")}),console.log("服务器已开启");