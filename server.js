const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const next = require('next')
const admin = require('firebase-admin')

const CST = require('./config/CST')

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

    server.get('/api/getSeats', (req, res, next) => {
        db.collection('seats').get()
        .then(seatsSnapshot => {
            let seats = {};

            seatsSnapshot.forEach((doc) => {
                const data = doc.data()

                seats[doc.id] = {
                    id: data.id,
                    status: data.status,
                    price: data.price
                }
            });

            res.json({seats: seats})
        })
        .catch(error => {console.log('Error ', error)})
    })

    server.post('/api/bookSeats', (req, res, next) => {
        db.collection('seats').get()
        .then(seatsSnapshot => {
            let errors = false;
            let seats = {};
            let soldSeats = [];

            seatsSnapshot.forEach((doc) => {
                seats[doc.id] = doc.data()
            });

            if (Object.entries(seats).length && req.body.bookedSeats.length) {
                const bookedSeats = req.body.bookedSeats;

                if (bookedSeats.length > CST.MAX_SEATS_TO_BOOK) {
                    errors = {
                        status: CST.ERROR.ERROR,
                        type: CST.ERROR.TO_MANY_TICKETS
                    }
                }

                let areSeatsFree = true;
                bookedSeats.forEach(item => {
                    if (seats[item.id].status !== CST.STATUS.FREE) {
                        areSeatsFree = false
                        soldSeats.push(seats[item.id].id)
                    }
                })

                if (!areSeatsFree) {
                    errors = {
                        status: CST.ERROR.ERROR,
                        type: CST.ERROR.SOLD_SEATS,
                        soldSeats: soldSeats
                    }
                }

                if (!errors) {
                    bookedSeats.forEach(item => {
                        let seat = db.collection('seats').doc(item.id)
                        seat.update({
                            status: CST.STATUS.HOLD,
                            soldTo: req.body.form.phone.value
                        })
                    })

                    let user = db.collection('users').doc(req.body.form.phone.value)
                    user.get().then(doc => {
                        let userOrderedSeats = [];

                        if (!doc.exists) {
                            console.log('No such document!');
                        } else {
                            userOrderedSeats = doc.data().orderedSeats;
                        }

                        userOrderedSeats = userOrderedSeats.concat(bookedSeats.map(item => {return item.id}))

                        user.set({
                            email: req.body.form.email.value,
                            name: req.body.form.name.value,
                            phone: req.body.form.phone.value,
                            orderedSeats: userOrderedSeats
                        }, {merge: true})

                        res.json({
                            status: true
                        })
                    })
                } else {
                    res.json(errors)
                }
            }
        })
        .catch((err) => res.json({
            error: 'DB error',
            message: 'Error getting documents', err
        }))
    })

    function checkAuth(req, res, next) {
        if (req.session.decodedToken) {
            next()
        } else {
            res.status(403).send('Unauthorized')
        }
    }

    server.get('/api/getTeam', checkAuth, (req, res, next) => {
        res.json({
            team: ['team']
        })
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})