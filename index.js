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

console.log("Name");

//closure = function combined together with its lexical scope is called closure
function x(){
    var a = 10;
    function y(ar){
        var b =1000;
        function r(){
            console.log(a,b, ar);
        }
        r();
    }
    y("Hello MF");
}
x();
// var z= x();
// z();

// var z = x();
// console.log(z);

// z();


