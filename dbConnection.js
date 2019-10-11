var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/stock");

var stockSchema = new mongoose.Schema({
	name: String,
	stockNumber: Number
});

var Product = mongoose.model("Product", stockSchema);

// adding a new product to the BD
/*
var manzana = new Product({
	name: "Manzanas",
	stockNumber: 5
});

manzana.save(function(err, product){
	if(err){
		console.log("Something is wrong with saving");
	} else {
		console.log("Saved");	
	}
});
*/

// retrieve all productucts form DB

exports.checkStock = function (item) {
	 return new Promise((resolve, reject) => {
		Product.findOne({name: item.name}, function(err, product){
			if(err){
				console.log("Something is wrong with retrieving");
				reject();
			} else {
				console.log("Retrieved");
				//console.log(products);
				if(product && product.stockNumber > 0){
					resolve();
				} else {
					reject();				
				}
			}
			mongoose.connection.close()
		});
	})

}
