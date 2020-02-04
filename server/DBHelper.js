const mongoConfig = require('../config/mongo')

module.exports = {
    getAllSeats: function(db, callback) {
        try {
            const collection = db.collection(mongoConfig.SEATS);
            collection.find({}).toArray(function(err, docs) {
                callback(docs);
            });
        } catch (error) {
            console.log(error)
        }
    },

    updateSeat: function(db, data, callback) {
        const collection = db.collection(mongoConfig.SEATS);
        collection.updateOne({ id : data.id }, { $set: data }, (err, result) => {
            callback(result);
        });
    },

    getUser: function(db, phone, callback) {
        try {
            const collection = db.collection(mongoConfig.USERS);
            collection.find({phone: phone}).toArray(function(err, result) {
                callback(result);
            });
        } catch (error) {
            console.log(error)
        }
    },

    addUser: function(db, userData, callback) {
        try {
            const collection = db.collection(mongoConfig.USERS);
            collection.insertOne(userData, function(err, result) {
                callback(result);
            });
        } catch (error) {
            console.log(error)
        }
    },

    updateUser: function(db, data, callback) {
        try {
            const collection = db.collection(mongoConfig.USERS);
            collection.updateOne({ id : data.id }, { $set: data }, (err, result) => {
                callback(result);
            });
        } catch (error) {
            console.log(error)
        }
    }
}