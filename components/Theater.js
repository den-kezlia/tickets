import React, {Component} from 'react'
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic'
import CST from '../config/CST'

//import Map from './Map'
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
            showForm: hideBookingForm
        })
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

        this.updateSeatStatus(item, itemStatus)
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