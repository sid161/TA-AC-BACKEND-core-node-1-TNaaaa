var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest)
function handleRequest(req,res){
    if(req.method === "GET" && req.url === '/users'){
        res.setHeader('Content-type','text/html')
        fs.createReadStream('./form.html').pipe(res);
} 

if(req.method === 'POST' && req.url === '/users' ){
    res.setHeader('Content-Type','text/html')
    res.end('Posted for first time');
}

}

server.listen(2345, () => {
    console.log("Server listening on port 2345")
})