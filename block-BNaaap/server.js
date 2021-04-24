var http = require('http');

var server = http.createServer(handleServer)

function handleServer(req,res){
    
    res.writeHead(201,{'Content-type', 'text/html'});
}

server.listen(4444, () => {
    console.log("server is listening on port 4444")
})