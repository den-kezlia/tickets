import React, {Component} from 'react'
import Firebase from "firebase/app"
import 'firebase/firestore'
import config from "../config/firebase"
import CST from '../config/CST'

import Map from './Map'
import Statusbar from './Statusbar'
import BookingForm from './BookingForm'
import MaxToBookNotification from './MaxToBookNotification'

export default class Theater extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookedSeats: [],
            totalPrice: 0,

            showForm: false,
            showMaxToBookNotification: false,
            showSuccessFormMessage: false,
            maxSeatsToBook: CST.MAX_SEATS_TO_BOOK,
            timer: 0,

            form: {
                name: '',
                email: '',
                phone: ''
            }
        }
    }

    componentDidMount() {
        Firebase.initializeApp(config)
        this.getSeats()
    }

    getSeats() {
        let db = Firebase.firestore()
        db.collection('seats').onSnapshot(
            querySnapshot => {
                let seats = {}
                querySnapshot.forEach(function (doc) {
                    seats[doc.id] = doc.data()
                })

                this.setState({seats: seats})
                this.generateState()
            },
            error => {
                console.error(error)
            }
        )
    }

    generateState() {
        const bookedSeats = []
        let totalPrice = 0

        for (let id in this.state.seats) {
            const element = this.state.seats[id]
            const seat = document.getElementById(element.id)
            seat.setAttribute('data-status', element.status)

            if (element.status === CST.STATUS.BOOKED) {
                bookedSeats.push(element)
                totalPrice = totalPrice + element.price
            }
        }

        this.setState({
            bookedSeats: bookedSeats,
            totalPrice: totalPrice
        })
    }

    updateSeatStatus(item, itemStatus) {
        const seats = this.state.seats
        let bookedSeats = this.state.bookedSeats
        let totalPrice = this.state.totalPrice

        seats[item.id].status = itemStatus
        if (itemStatus === CST.STATUS.BOOKED) {
            bookedSeats.push(seats[item.id])
            totalPrice = totalPrice + seats[item.id].price
        } else {
            bookedSeats = bookedSeats.filter((i) => {
                return i.id !== item.id
            })
            totalPrice = totalPrice - seats[item.id].price
        }

        this.setState({
            seats: seats,
            bookedSeats: bookedSeats,
            totalPrice: totalPrice
        })

        item.setAttribute('data-status', itemStatus)
    }

    resetBookedSeats(hideBookingForm = true) {
        let bookedSeats = this.state.bookedSeats
        const seats = this.state.seats
        const totalPrice = 0

        bookedSeats.forEach((book) => {
            seats[book.id].status = CST.STATUS.FREE
            document.getElementById(book.id).setAttribute('data-status', CST.STATUS.FREE)
        })

        bookedSeats = []

        this.setState({
            seats: seats,
            bookedSeats: bookedSeats,
            totalPrice: totalPrice,
            timer: 0,
            showForm: hideBookingForm
        })
    }

    clearTimer() {
        clearInterval(this.interval)
        clearTimeout(this.timer)
        this.setState({timer: 0})
        this.timer = null
    }

    handleBookSeat(item) {
        let itemStatus = item.getAttribute('data-status')

        if (itemStatus === CST.STATUS.SOLD || itemStatus === CST.STATUS.HOLD) {
            return
        }

        itemStatus = itemStatus === CST.STATUS.FREE ? CST.STATUS.BOOKED : CST.STATUS.FREE

        if (this.state.bookedSeats.length < this.state.maxSeatsToBook || itemStatus === CST.STATUS.FREE) {
            this.updateSeatStatus(item, itemStatus)
        } else {
            this.setState({showMaxToBookNotification: true})
        }
    }

    handleUnBookSeat(id) {
        const item = document.getElementById(id)
        const itemStatus = CST.STATUS.FREE

        if (this.state.bookedSeats.length === 1) {
            this.clearTimer()
        }

        this.updateSeatStatus(item, itemStatus)
    }

    handleOpenBookingForm() {
        if (!this.timer) {
            this.setState({
                timer: CST.TIMER
            })

            this.interval = setInterval(() => {
                var timer = this.state.timer
                this.setState({timer: timer - 1})
            }, 1000)

            this.timer = setTimeout(() => {
                this.resetBookedSeats(false)
                this.clearTimer()
                console.log('timeout')
            }, CST.TIMER * 1000)
        }

        this.setState({showForm: true})
    }

    handleCloseBookingForm() {
        this.setState({
            showForm: false,
            showSuccessFormMessage: false
        })
    }

    handleBooking(e) {
        e.preventDefault()
        const form = this.state.form
        const bookedSeats = this.state.bookedSeats

        fetch('/api/bookSeats', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({form, bookedSeats})
        })
        .then(data => {
            if (data.ok) {
                this.resetBookedSeats()
                this.clearTimer()
                this.setState({showSuccessFormMessage: true})
            }
        })
        .catch(error => {
            console.log('error ' + error)
        })
    }

    handleCloseMaxToBookNotification() {
        this.setState({showMaxToBookNotification: false})
    }

    handleFieldChange(e) {
        const form = this.state.form

        if (e.target !== undefined) {
            form[e.target.name] = e.target.value
        } else {
            form.phone = e;
        }
        this.setState({form: form})
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <Map
                        onClick={(item) => this.handleBookSeat(item)}
                    />

                    <Statusbar
                        bookedSeats={this.state.bookedSeats}
                        totalPrice={this.state.totalPrice}
                        timer={this.state.timer}
                        handleUnBookSeat={(id) => {this.handleUnBookSeat(id)}}
                        handleOpenForm={() => {this.handleOpenBookingForm()}}
                    />
                </div>

                {this.state.showForm &&
                    <BookingForm
                        bookedSeats={this.state.bookedSeats}
                        totalPrice={this.state.totalPrice}
                        showSuccessFormMessage={this.state.showSuccessFormMessage}
                        timer={this.state.timer}
                        form={this.state.form}
                        handleFieldChange={(e) => {this.handleFieldChange(e)}}
                        handleBooking={(e) => {this.handleBooking(e)}}
                        handleCloseBookingForm={() => {this.handleCloseBookingForm()}}
                    />
                }

                {this.state.showMaxToBookNotification &&
                    <MaxToBookNotification
                        maxSeatsToBook={this.state.maxSeatsToBook}
                        handleCloseMaxToBookNotification={() => {this.handleCloseMaxToBookNotification()}}
                    />
                }
            </div>
        )
    }
}