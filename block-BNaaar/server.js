var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
console.log(req.method,req.url)
if(req.method === "GET" && req.url === '/'){
 res.setHeader('Content-Type', 'text/plain')
 res.end("Welcome to homepage")
} else if(req.method === "GET" && req.url === '/about'){
    res.setHeader('Content-Type','text/html')
    res.end("<h2>this is all about NodeJS</h2>")
} else if(req.method === "POST" && req.url === '/about'){
    res.setHeader('Content-Type', 'application/json');
    res.end("this is post request");
} else{
    res.writeHead(400, {'Content-Type': "text/html"})
    res.end('<h2>Page not found</h2>')
}
}

server.listen(5000, () => {
    console.log("Server is listening on port 5000");
})