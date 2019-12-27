import React, {Component} from 'react';
import Map from './Map'

export default class Theater extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seats: [{
                id: 'p-1-1',
                status: 'free'
            }, {
                id: 'p-1-2',
                status: 'sold'
            }, {
                id: 'p-1-3',
                status: 'free'
            }]
        }
    }

    componentDidMount() {
        this.state.seats.forEach((element) => {
            const seat = document.getElementById(element.id);
            seat.setAttribute('data-status', element.status);
        });
    }

    updateSeatStatus(item, itemStatus) {
        const seats = this.state.seats;

        seats.forEach((element, index) => {
            if (element.id === item.id) {
                seats[index].status = itemStatus;
            }
        });

        this.setState({seats: seats})
        item.setAttribute('data-status', itemStatus);
    }

    handleBlockSeat(item) {
        let itemStatus = item.getAttribute('data-status');

        if (itemStatus === 'sold') {
            return;
        }

        itemStatus = itemStatus === 'free' ? 'blocked' : 'free';
        this.updateSeatStatus(item, itemStatus);
    }

    render() {
        return (
            <div>
                <Map
                    onClick={(item) => this.handleBlockSeat(item)}
                    seats={this.state.seats}
                />
            </div>
        )
    }
}