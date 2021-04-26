var http = require('http');

var server = http.createServer(handleRequest)
function handleRequest(req,res){
    if(req.method === "GET" && req.url === '/'){
        res.setHeader("Content-Type", "text/plain")
        res.end("Siddharth")
    } else if(req.method === "GET" && req.url === '/about'){
        res.setHeader("Content-Type", "text/html")
        res.end('<h2>Siddharth</h2>')
    } else {
        res.end("page not found");
    }

}

server.listen(2345, () => {
    console.log("Server listening on port 2345")
})