var fs = require('fs')
fs.readFile('./content.md', filepath, (err, file) => {
  console.log(err, content.toString())
})

let buff1 = Buffer.alloc(10)
console.log(buff1)

buff1.write('Welcome to Buffer');