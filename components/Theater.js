import React, {Component} from 'react'
import Firebase from "firebase/app"
import 'firebase/firestore'
import config from "../config/firebase"

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
            maxSeatsToBook: 2,
            timer: 0
        }
    }

    componentDidMount() {
        Firebase.initializeApp(config)
        this.getSeats()
        console.log('here')
    }

    getSeats() {
        let db = Firebase.firestore();
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
        let totalPrice = 0;

        for (let id in this.state.seats) {
            const element = this.state.seats[id];
            const seat = document.getElementById(element.id);
            seat.setAttribute('data-status', element.status);

            if (element.status === 'booked') {
                bookedSeats.push(element)
                totalPrice = totalPrice + element.price
            }
        }

        this.setState({
            bookedSeats: bookedSeats,
            totalPrice: totalPrice
        });
    }

    updateSeatStatus(item, itemStatus) {
        const seats = this.state.seats;
        let bookedSeats = this.state.bookedSeats;
        let totalPrice = this.state.totalPrice;

        seats[item.id].status = itemStatus
        if (itemStatus === 'booked') {
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

        item.setAttribute('data-status', itemStatus);
    }

    resetBookedSeats() {
        let bookedSeats = this.state.bookedSeats
        const seats = this.state.seats
        const totalPrice = 0

        bookedSeats.forEach((book) => {
            seats[book.id].status = 'free'
            document.getElementById(book.id).setAttribute('data-status', 'free')
        });

        bookedSeats = []

        this.setState({
            seats: seats,
            bookedSeats: bookedSeats,
            totalPrice: totalPrice,
            timer: 0
        })
    }

    handleBookSeat(item) {
        let itemStatus = item.getAttribute('data-status');

        if (itemStatus === 'sold') {
            return;
        }

        itemStatus = itemStatus === 'free' ? 'booked' : 'free';

        if (this.state.bookedSeats.length < this.state.maxSeatsToBook || itemStatus === 'free') {
            this.updateSeatStatus(item, itemStatus);
        } else {
            this.setState({showMaxToBookNotification: true})
        }
    }

    handleUnBookSeat(id) {
        const item = document.getElementById(id);
        const itemStatus = 'free';

        this.updateSeatStatus(item, itemStatus);
    }

    handleOpenBookingForm() {
        this.setState({
            timer: 15
        })

        this.interval = setInterval(() => {
            var timer = this.state.timer
            this.setState({timer: timer - 1})
        }, 1000)

        setTimeout(() => {
            this.resetBookedSeats()
            clearInterval(this.interval)
        }, 15000);

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

        this.resetBookedSeats()
        clearInterval(this.interval)
        this.setState({showSuccessFormMessage: true})
    }

    handleCloseMaxToBookNotification() {
        this.setState({showMaxToBookNotification: false})
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <Map onClick={(item) => this.handleBookSeat(item)} />

                    <Statusbar
                        bookedSeats={this.state.bookedSeats}
                        totalPrice={this.state.totalPrice}
                        timer={this.state.timer}
                        handleUnBookSeat={(id) => {this.handleUnBookSeat(id)}}
                        handleOpenForm={() => {this.handleOpenBookingForm()}} />
                </div>

                {this.state.showForm &&
                    <BookingForm
                        bookedSeats={this.state.bookedSeats}
                        totalPrice={this.state.totalPrice}
                        showSuccessFormMessage={this.state.showSuccessFormMessage}
                        timer={this.state.timer}
                        handleCloseBookingForm={() => {this.handleCloseBookingForm()}}
                        handleBooking={(e) => {this.handleBooking(e)}} />
                }

                {this.state.showMaxToBookNotification &&
                    <MaxToBookNotification
                        maxSeatsToBook={this.state.maxSeatsToBook}
                        handleCloseMaxToBookNotification={() => {this.handleCloseMaxToBookNotification()}} />
                }
            </div>
        )
    }
}