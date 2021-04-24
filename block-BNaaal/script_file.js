var http = require('http');
var server = http.createServer(handleServer);
function handleServer(req,res){
    res.end('Welcome');
}

server.listen(4000, () => {
    console.log('server listening on port 3000');
})