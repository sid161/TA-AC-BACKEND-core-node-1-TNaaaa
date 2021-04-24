var fs = require('fs');
fs.readFile('./content.md', (err, content) => {
  console.log(content.toString())
})

var result = fs.readFileSync('./content.md')
    console.log(result)

let buff1 = Buffer.alloc(10)
console.log(buff1)

buff1.write('Welcome to Buffer');