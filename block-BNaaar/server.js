var http = require('http')
var url = require('url');

var server = http.createServer(handleServer)
var parsedUrl = url.parse()
var pathName = parsedUrl.pathname
function handleServer(req,res){
console.log(req.method,req.url)
if(req.method === "GET" && pathName === '/'){
 res.write("Welcome to homepage");
 res.end()
} else if(req.method === "GET" && pathName === '/about'){
    res.setHeader('Content-Type','text/html')
    res.end("<h2>this is all about NodeJS</h2>")
} else if(req.method === "POST" && pathName === '/about'){
    res.json(`{message: this is a post request}`);
} else{
    res.writeHead(400, {'Content-Type': "text/html"})
    res.end('<h2>Page not found</h2>')
}

server.listen(5000, () => {
    console.log("Server is listening on port 5000");
})