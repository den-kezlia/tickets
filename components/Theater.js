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
        const bookedSeats = [];
        let totalPrice = 0;

        for (let id in seats) {
            const seat = seats[id];

            if (seat.id === item.id) {
                seats[id].status = itemStatus;
            }

            if (seat.status === 'booked') {
                bookedSeats.push(seat)
                totalPrice = totalPrice + seat.price
            }
        }

        this.setState({
            seats: seats,
            bookedSeats: bookedSeats,
            totalPrice: totalPrice
        })
        item.setAttribute('data-status', itemStatus);
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

                    {this.state.bookedSeats.length > 0 &&
                        <Statusbar
                            bookedSeats={this.state.bookedSeats}
                            totalPrice={this.state.totalPrice}
                            handleUnBookSeat={(id) => {this.handleUnBookSeat(id)}}
                            handleOpenForm={() => {this.handleOpenBookingForm()}} />
                    }
                </div>

                {this.state.showForm &&
                    <BookingForm
                        bookedSeats={this.state.bookedSeats}
                        totalPrice={this.state.totalPrice}
                        showSuccessFormMessage={this.state.showSuccessFormMessage}
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