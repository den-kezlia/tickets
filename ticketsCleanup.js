const next = require('next')
const admin = require('firebase-admin')
var fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})

const CST = require('./config/CST')

admin.initializeApp({
    credential: admin.credential.cert(require('./config/server.json'))
})

let db = admin.firestore();

app.prepare().then(() => {
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

        seats.forEach(seat => {
            db.collection('seats').doc(seat.id).set(seat);
        })
    }});
})