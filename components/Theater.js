import React, {Component} from 'react';
import Map from './Map'
import Statusbar from './Statusbar'
import BookingForm from './BookingForm'

export default class Theater extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seats: [{
                id: 'p-1-1',
                status: 'booked',
                price: 120
            }, {
                id: 'p-1-2',
                status: 'sold',
                price: 120
            }, {
                id: 'p-1-3',
                status: 'free',
                price: 120
            }, {
                id: 'p-1-4',
                status: 'free',
                price: 100
            }],

            bookedSeats: [],
            totalPrice: 0,

            showForm: false
        }
    }

    componentDidMount() {
        const bookedSeats = [];
        let totalPrice = 0;

        this.state.seats.forEach((element) => {
            const seat = document.getElementById(element.id);
            seat.setAttribute('data-status', element.status);

            if (element.status === 'booked') {
                bookedSeats.push(element)
                totalPrice = totalPrice + element.price
            }
        });

        this.setState({
            bookedSeats: bookedSeats,
            totalPrice: totalPrice
        });
    }

    updateSeatStatus(item, itemStatus) {
        const seats = this.state.seats;
        const bookedSeats = [];
        let totalPrice = 0;

        seats.forEach((element, index) => {
            if (element.id === item.id) {
                seats[index].status = itemStatus;
            }

            if (element.status === 'booked') {
                bookedSeats.push(element)
                totalPrice = totalPrice + element.price
            }
        });

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
        this.updateSeatStatus(item, itemStatus);
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
        this.setState({showForm: false})
    }

    handleBooking() {
        console.log('booking')
    }

    render() {
        return (
            <div>
                <Map onClick={(item) => this.handleBookSeat(item)} />

                {this.state.bookedSeats.length > 0 &&
                    <Statusbar
                        bookedSeats={this.state.bookedSeats}
                        totalPrice={this.state.totalPrice}
                        handleUnBookSeat={(id) => {this.handleUnBookSeat(id)}}
                        handleOpenForm={() => {this.handleOpenBookingForm()}} />
                }

                {this.state.showForm &&
                    <BookingForm
                        bookedSeats={this.state.bookedSeats}
                        totalPrice={this.state.totalPrice}
                        handleCloseBookingForm={() => {this.handleCloseBookingForm()}}
                        handleBooking={() => {this.handleBooking()}} />
                }
            </div>
        )
    }
}