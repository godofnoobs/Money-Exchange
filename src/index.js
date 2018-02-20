// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var amount = currency;
    var res = {};
    var nominals = {"H":50,"Q":25,"D":10,"N":5,"P":1};
    
    if (currency > 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    for (var i in nominals) {
        if (amount <= 0)
            break;
        var currentCoin = nominals[i];
        currentCoinQty = Math.floor(amount/currentCoin);
        if (currentCoinQty === 0)
            continue;
        res[i] = currentCoinQty;
        amount = amount%currentCoin;
    }
    return res;
}