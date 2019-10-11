var cartFunctions = require("./CartFunctions.js");
var modulo2 = require("./dbConnection.js");

function Item(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
};

var cart = [];

var item1 = new Item(2, "Naranjas", 2);
//var item1 = new Item(1, "Oreo", 2);
cartFunctions.addToCart(item1, cart);
setTimeout(() => {console.log(cart)}, 1000);
// modulo1.removeFromCart(1, cart);
// console.log(cart);

