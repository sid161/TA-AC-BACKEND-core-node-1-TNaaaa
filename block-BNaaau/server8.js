var http = require('http')

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    res.writeHead(200, ("Content-Type: text/plain"))
}

server.listen(8000, () => {
    console.log("Server listening on port 8000")
})