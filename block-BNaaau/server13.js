var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(handleRequest)
function handleRequest(req,res){
    var parsedUrl = url.parse(req.url, true)
    console.log(parsedUrl.pathname)
   
}

server.listen(4200, () => {
    console.log("Server listening on port 2345")
})