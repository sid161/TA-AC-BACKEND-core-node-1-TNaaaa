var http = require('http')
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    if(req.method === "GET" && req.url === '/'){
    fs.createReadStream('./index.html').pipe(res)
    
} else if  (req.method === "GET" && req.url === '/about'){
fs.createReadStream('./about.html').pipe(res)
} else if( req.method === "GET" && req.url === '/blog'){
    
}

server.listen(2200, () => {
    console.log("Server listening on port 2200")
})