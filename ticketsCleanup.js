var fs = require('fs')
const MongoClient = require('mongodb').MongoClient;

const CST = require('./config/CST')
const mongoConfig = require('./config/mongo')

const setSeats = function(db, data, callback) {
    const collection = db.collection(mongoConfig.SEATS);

    collection.insertMany(data, function(err, result) {
        callback(result);
    });
}

fs.readFile('back/seats.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    var seats = JSON.parse(data);
    seats = seats.map(element => {
        return {
            id: element.id,
            price: 200,
            status: CST.STATUS.FREE
        }
    })

    MongoClient.connect(mongoConfig.URL, (err, client) => {
        const db = client.db(mongoConfig.DB);

        setSeats(db, seats, () => {
            client.close();
        });
    });
}});