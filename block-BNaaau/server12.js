var http = require('http');

var server = http.createServer(handleRequest)
function handleRequest(req,res){
    if(req.method === "GET" && req.url === '/users'){
        res.setHeader("Content-Type", "text/html")
        res.end("<h2>Siddharth<h2>, <h4>sharma.siddharth1610@gmail.com</h4>")
    } else if(req.method === "POST" && req.url === '/users'){
        res.setHeader("Content-Type", "text/plain")
        res.end("Posted for the second time")
    } else {
        res.console.error();
    }

}

server.listen(2345, () => {
    console.log("Server listening on port 2345")
})