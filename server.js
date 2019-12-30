const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const next = require('next')
const admin = require('firebase-admin')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

const firebaseAuth = admin.initializeApp({
    credential: admin.credential.cert(require('./config/server.json'))
})

let db = admin.firestore();

app.prepare().then(() => {
    const server = express()

    server.use(bodyParser.json())
    server.use(
        session({
            secret: 'MYSECRET',
            saveUninitialized: true,
            store: new FileStore({ secret: 'MYSECRET' }),
            resave: false,
            rolling: true,
            httpOnly: true,
            cookie: { maxAge: 604800000 }, // week
        })
    )

    server.use((req, res, next) => {
        req.firebaseServer = firebaseAuth
        next()
    })

    server.post('/api/login', (req, res) => {
        if (!req.body) return res.sendStatus(400)

        const token = req.body.token
        firebaseAuth
            .auth()
            .verifyIdToken(token)
            .then(decodedToken => {
                req.session.decodedToken = decodedToken
                return decodedToken
            })
            .then(decodedToken => res.json({
                status: true,
                decodedToken
            }))
            .catch(error => res.json({
                error
            }))
    })

    server.post('/api/logout', (req, res) => {
        req.session.decodedToken = null
        res.json({
            status: true
        })
    })

    server.post('/api/bookSeats', (req, res, next) => {
        db.collection('seats').get()
        .then((seatsSnapshot) => {
            let seats = {};

            seatsSnapshot.forEach((doc) => {
                seats[doc.id] = doc.data()
            });

            if (Object.entries(seats).length && req.body.bookedSeats.length) {
                let areSeatsFree = true;
                const bookedSeats = req.body.bookedSeats;

                bookedSeats.forEach(item => {
                    if (seats[item.id].status !== 'free') {
                        areSeatsFree = false
                    }
                })

                if (areSeatsFree) {
                    bookedSeats.forEach(item => {
                        let seat = db.collection('seats').doc(item.id)
                        seat.update({
                            status: 'sold',
                            soldTo: req.body.form.phone
                        })
                    })

                    let user = db.collection('users').doc(req.body.form.phone)
                    user.get().then(doc => {
                        let userOrderedSeats = [];

                        if (!doc.exists) {
                            console.log('No such document!');
                        } else {
                            userOrderedSeats = doc.data().orderedSeats;
                        }

                        userOrderedSeats = userOrderedSeats.concat(bookedSeats.map(item => {return item.id}))

                        user.set({
                            email: req.body.form.email,
                            name: req.body.form.name,
                            phone: req.body.form.phone,
                            orderedSeats: userOrderedSeats
                        }, {merge: true})
                    })
                }
            }
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });

        res.json({
            status: true
        })

        next()
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})