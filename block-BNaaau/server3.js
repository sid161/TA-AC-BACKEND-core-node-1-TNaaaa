var http = require('http');
var server = http.createServer(handleRequest)

function handleRequest(req,res){
    console.log(req.headers);
    res.user-agent

}

server.listen(5555, () => {
    console.log("Server is listening on port 5555")
})