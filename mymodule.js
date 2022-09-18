exports.myDateTime = function(){
    return Date();
}
var x=10
function dep(){
    return x+x;
}
exports.lk = function(){
    return dep();
}
module.exports.xKaBaap = x;

// const obj ={head : 1, toe:'there'};
// exports.obj.head;


//console.log(di)