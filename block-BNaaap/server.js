var http = require('http');

var server = http.createServer(handleServer)

function handleServer(req,res){
    console.log(req.method);
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>Welcome</h2>')
}

server.listen(4444, () => {
    console.log("server is listening on port 4444")
})