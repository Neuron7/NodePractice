
module.exports.create = function(stock={}){
    if((stock["shares"] > 100 || stock["shares"] < 1) 
    || (stock["type"]!="buy" && stock["type"]!="sell") ){
        throw new Error("Payload invalid");
    }
    console.log(stock);
    
}

module.exports.get = function(id=null){
    let trades = require('./trade.json');
    if(id==null){
        return trades; 
    }
    for(let tr of trades){
        if(tr.id == id){
            return tr;
        }
    }
    return null;

}