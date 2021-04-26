var http = require('http');

var server =  http.createServer(handleRequest)

function handleRequest(req,res){
    console.log(req.method,req.url);
    res.setWrite("Content-type","plain/text")
    res.end()
}

server.listen(5566, () => {
    console.log("server listening on port 5566");
})