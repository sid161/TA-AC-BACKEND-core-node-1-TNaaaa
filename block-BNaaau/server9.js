var http = require('http');
var server = http.createServer(handleRequest)

function handleRequest(req,res){
    res.setHeader('Content-Type', 'application/JSON')
    res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}));
}

server.listen(8888, () => {
    console.log("Server listening on port 8888")
})