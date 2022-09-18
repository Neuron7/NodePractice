//creating a sever in node js without express
var http = require('http');
var dateTime = require('./mymodule.js');

http.createServer(function(req,res){
    res.writeHead(200,{'Context' : 'text/plain'});
    res.end('Server is running at 8001');
}).listen(8001);


//modules in nodejs
console.log(dateTime.xKaBaap);
console.log(dateTime.myDateTime());
console.log(dateTime.lk());

console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');
var args = process.argv;
console.log("this processl.argv command line example"+args[2]);
var re = 12154574854121212313565496947654321415646423;
console.log(typeof re);
console.log(typeof NaN);


