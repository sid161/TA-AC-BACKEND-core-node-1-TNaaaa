var http = require('html');

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    res.end('My first Server in Nodejs')
}

server.listen(5100, () => {
    console.log("server is listening on port 5100")
})