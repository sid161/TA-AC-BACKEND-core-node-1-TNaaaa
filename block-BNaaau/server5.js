var http = require('http');

var server = http.createServer(handleRequest);
function handleRequest(req,res){
    return res.headers()
}

server.listen(7000, () => {
    console.log("server listening on port 7000")
})