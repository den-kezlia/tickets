const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const MongoClient = require('mongodb').MongoClient;

const CST = require('./config/CST')
const mongoConfig = require('./config/mongo')
const DBHelper = require('./server/DBHelper')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.json())

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
        MongoClient.connect(mongoConfig.URL, (err, client) => {
            const db = client.db(mongoConfig.DB);

            DBHelper.getAllSeats(db, results => {
                client.close();
                let seats = {};

                results.forEach((item) => {
                    seats[item._id] = {
                        _id: item._id,
                        id: item.id,
                        status: item.status,
                        price: item.price
                    }
                });

                res.json({
                    status: 'success',
                    seats: seats
                })
            });
        });
    })

    server.post('/api/bookSeats', (req, res, next) => {
        MongoClient.connect(mongoConfig.URL, (err, client) => {
            const db = client.db(mongoConfig.DB);
            let errors = false;
            let soldSeats = [];

            DBHelper.getAllSeats(db, seats => {
                if (seats.length && req.body.bookedSeats.length) {
                    const bookedSeats = req.body.bookedSeats;

                    if (bookedSeats.length > CST.MAX_SEATS_TO_BOOK) {
                        errors = {
                            status: CST.ERROR.ERROR,
                            type: CST.ERROR.TO_MANY_TICKETS
                        }
                    }

                    let areSeatsSold = false;
                    bookedSeats.forEach(bookedSeat => {
                        const sold = seats.filter(seat => {
                            return seat.id === bookedSeat.id && seat.status !== CST.STATUS.FREE
                        })

                        if (sold.length) {
                            areSeatsSold = false;
                            soldSeats.push(sold);
                        }
                    })

                    if (areSeatsSold) {
                        errors = {
                            status: CST.ERROR.ERROR,
                            type: CST.ERROR.SOLD_SEATS,
                            soldSeats: soldSeats
                        }
                    }

                    if (!errors) {
                        bookedSeats.forEach((bookedSeat, index) => {
                            DBHelper.updateSeat(db, {
                                id: bookedSeat.id,
                                status: CST.STATUS.HOLD,
                                soldTo: req.body.form.phone.value
                            }, () => {
                                if (bookedSeats.length - 1 === index) {
                                    let userData = {
                                        email: req.body.form.email.value,
                                        name: req.body.form.name.value,
                                        phone: req.body.form.phone.value,
                                        orderedSeats: bookedSeats.map(seat => {return seat.id})
                                    };

                                    DBHelper.getUser(db, req.body.form.phone.value, user => {
                                        if (user.length) {
                                            userData.orderedSeats = userData.orderedSeats.concat(user[0].orderedSeats)

                                            DBHelper.updateUser(db, userData, () => {
                                                client.close()

                                                res.json({
                                                    status: true
                                                })
                                            })
                                        } else {
                                            DBHelper.addUser(db, userData, () => {
                                                client.close()

                                                res.json({
                                                    status: true
                                                })
                                            });
                                        }
                                    })
                                }
                            })
                        })
                    } else {
                        res.json(errors)
                    }
                } else {
                    errors = {
                        status: CST.ERROR.ERROR,
                        type: CST.ERROR.DB_ERROR
                    }

                    res.json(errors)
                }
            })
        })
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