var http = require('http');

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    if(req.method === "POST" && req.url === '/'){
        res.setHeader('Content-type', 'text/html')
        res.end('<h2>posted for first time</h2>')
    }

}

server.listen(5050, () => {
    console.log('Server listening on port 5050')
})