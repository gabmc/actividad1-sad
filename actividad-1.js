var modulo1 = require("./modulo-1.js");

function Item(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
};

var cart = [];

// var item1 = new Item(2,"Chips Ahoy!",2);
var item1 = new Item(1, "Oreo", 2);
modulo1.addToCart(item1, cart);
console.log(cart);
// modulo1.removeFromCart(1, cart);
// console.log(cart);

