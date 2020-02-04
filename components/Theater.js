import React, {Component} from 'react'
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic'
import CST from '../config/CST'
import utils from '../utils/utils'

import Statusbar from './Statusbar'
import BookingForm from './BookingForm'
import MaxToBookNotification from './MaxToBookNotification'

const Map = dynamic(import('./Map'), { ssr: false })

export default class Theater extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookedSeats: [],
            totalPrice: 0,

            showForm: false,
            showMaxToBookNotification: false,
            maxSeatsToBook: CST.MAX_SEATS_TO_BOOK,
            timer: 0,
        }
    }

    componentDidMount() {
        this.getSeats()
    }

    getSeats = async function() {
        try {
            const response = await fetch('/api/getSeats', {
                method: 'GET',
                headers: {"Content-Type": "application/json"}
            })
            const data = await response.json()

            if (data) {
                this.setState({seats: data.seats})
                this.generateState()
            }
        } catch (error) {
            console.log(error)
        }
    }

    generateState() {
        const bookedSeats = []
        const seats = this.state.seats
        let totalPrice = 0

        for (let id in seats) {
            const seat = seats[id]

            if (seat.status === CST.STATUS.BOOKED) {
                bookedSeats.push(seat)
                totalPrice = totalPrice + seat.price
            }
        }

        this.setState({
            bookedSeats: bookedSeats,
            totalPrice: totalPrice
        })
    }

    updateSeatStatus(id, status) {
        const seats = this.state.seats
        let bookedSeats = this.state.bookedSeats
        let totalPrice = this.state.totalPrice

        const seat = utils.filterSeat(seats, id)
        seats[seat._id].status = status

        if (status === CST.STATUS.BOOKED) {
            bookedSeats.push(seats[seat._id])
            totalPrice = totalPrice + seats[seat._id].price
        } else {
            bookedSeats = bookedSeats.filter((i) => {
                return i.id !== id
            })
            totalPrice = totalPrice - seats[seat._id].price
        }

        this.setState({
            seats: seats,
            bookedSeats: bookedSeats,
            totalPrice: totalPrice
        })
    }

    resetBookedSeats(hideBookingForm = true) {
        let bookedSeats = this.state.bookedSeats
        const seats = this.state.seats
        const totalPrice = 0

        bookedSeats.forEach((book) => {
            seats[book._id].status = CST.STATUS.FREE
        })

        bookedSeats = []

        this.setState({
            seats: seats,
            bookedSeats: bookedSeats,
            totalPrice: totalPrice,
            showForm: hideBookingForm
        })
    }

    handleBookSeat(item) {
        let status = item.getAttribute('data-status')

        if (status === CST.STATUS.SOLD || status === CST.STATUS.HOLD) {
            return
        }

        status = status === CST.STATUS.FREE ? CST.STATUS.BOOKED : CST.STATUS.FREE

        if (this.state.bookedSeats.length < this.state.maxSeatsToBook || status === CST.STATUS.FREE) {
            this.updateSeatStatus(item.id, status)
        } else {
            this.setState({showMaxToBookNotification: true})
        }
    }

    handleUnBookSeat(id) {
        const item = document.getElementById(id)
        const status = CST.STATUS.FREE

        this.updateSeatStatus(item.id, status)
    }

    handleOpenBookingForm() {
        this.setState({showForm: true})
    }

    handleCloseMaxToBookNotification() {
        this.setState({showMaxToBookNotification: false})
    }

    handleCloseBookingForm() {
        this.setState({
            showForm: false
        })
    }

    handleBooking(status) {
        if (status) {
            this.resetBookedSeats()
        }
        this.getSeats()
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <Map
                        seats={this.state.seats}
                        onClick={(item) => this.handleBookSeat(item)}
                    />

                    <Statusbar
                        bookedSeats={this.state.bookedSeats}
                        totalPrice={this.state.totalPrice}
                        handleUnBookSeat={(id) => {this.handleUnBookSeat(id)}}
                        handleOpenForm={() => {this.handleOpenBookingForm()}}
                    />
                </div>

                {this.state.showForm &&
                    <BookingForm
                        bookedSeats={this.state.bookedSeats}
                        totalPrice={this.state.totalPrice}
                        handleCloseBookingForm={() => this.handleCloseBookingForm()}
                        handleBooking={(status) => this.handleBooking(status)}
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