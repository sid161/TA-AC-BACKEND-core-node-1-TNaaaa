var http = require('http');

var server = http.createServer(handleServer);

function handleServer(req,res){
    console.log(req.method, req.url,req.headers);
    res.end('Welcome');
}

server.listen(3000,() => {
    console.log('server listening to port 3000');
})