console.log('Welcome to Nodejs');
var os = require('os');
var freeMem = os.freemem()
console.log(freeMem);
var cpuCount = os.cpus().length
console.log(cpuCount);
var version = os.version()
console.log(version);
var uptime = os.uptime()
console.log(uptime)

var fs = require('fs');
fs.readFile('./index.md',(error,content) => {
    console.log(content.toString())
})

fs.unlink('./index.md', (error,content) => {
    console.log(content.toString())
})

var buffer = Buffer.alloc(12);
console.log(buffer.write("hello i am siddharth"));

// non -blocking async
console.log('hello');
setTimeout(() => {
    console.log('after3sec')
},3000)
console.log("I execute second");