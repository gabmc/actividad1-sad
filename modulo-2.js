exports.checkStock = function (item) {
const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        console.error(err)
        return
    }
    const db = client.db('sad-actividad1')
    const collection = db.collection('items')
    collection.findOne({
        id: item.id
    }, (err, item) => {
        console.log("ESTOY CHEQUEANDO");
        
        if (item.stock == 0){
            console.log("No stock");
            return false;
        }
        return true;
    })
    // return true;
})
}