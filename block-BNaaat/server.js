var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    if(req.method === "GET" && req.url === "/about"){
        res.setHeader('Content-Type','text-html')
        fs.createReadStream('./node.html').pipe(res)
    }

}

server.listen(5555, () => {
    console.log("Server is listening on port 5555")
})

