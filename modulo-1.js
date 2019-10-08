var modulo2 = require("./modulo-2.js");

exports.addToCart = function (item, cart) {
    if (modulo2.checkStock(item)){
        console.log("aaaaaa");
        
        cart.push(item);
        console.log("Added");
        console.log(item);
    }
}

exports.removeFromCart = function (itemId, cart) {
    // for (var item in cart){
    var removedItem = null;
    for (var itemIndex = 0; itemIndex < cart.length; itemIndex++){
        // if (item.id == itemId)
        if (cart[itemIndex].id == itemId)
            removedItem = cart.splice(itemIndex, 1);
    }
    console.log("Removed");
    console.log(removedItem);
    
}