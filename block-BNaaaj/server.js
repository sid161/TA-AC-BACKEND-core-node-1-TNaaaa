const { parse } = require('path');
var url = require('url');
var adr = `https://airindia.com/fares/calculate?from=delhi&to=detroit`;
var parsedUrl = url.parse(adr,true);
console.log(parsedUrl.query.toString())

console.log(parsedUrl.pathname);
