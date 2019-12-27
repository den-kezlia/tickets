import React, {Component} from 'react';
import Seat from './SeatBack';
import Panel from './PanelBack';

class Theater extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seats: [{
                seat: 1,
                status: 'free'
            }, {
                seat: 2,
                status: 'free'
            }, {
                seat: 3,
                status: 'blocked'
            }, {
                seat: 4,
                status: 'sold'
            }],
            timer: 0,
            blocked: false
        }
    }

    updateSeatStatus(item) {
        const seats = this.state.seats;
        seats.forEach((element, index) => {
            if (element.seat === item.seat) {
                seats[index] = item;
            }
        });

        this.setState({seats: seats})
    }

    handleBlockSeat(item) {
        if (item.status === 'sold') {
            return;
        }

        item.status = item.status === 'free' ? 'blocked' : 'free';
        this.updateSeatStatus(item);
    }

    getBlockedSeatsCount() {
        let count = 0;

        this.state.seats.forEach(element => {
            if (element.status === 'blocked') {
                count += 1;
            }
        });

        return count;
    }

    handleReserve() {
        this.setState({
            timer: 5,
            blocked: true
        });

        let interval = setInterval(() => {
            var timer = this.state.timer;
            this.setState({timer: timer - 1})
        }, 1000);

        setTimeout(() => {
            const seats = this.state.seats;
            seats.forEach((element, index) => {
                if (element.status === 'blocked') {
                    seats[index].status = 'free';
                }
            });

            this.setState({
                seats: seats,
                blocked: false
            });
            clearInterval(interval);
        }, 5000);
    }

    render() {
        let blockedSeatsCount = this.getBlockedSeatsCount();

        return (
            <div>
                <ul>
                    {this.state.seats.map((item) => {
                        return (
                            <li key={item.seat}>
                                <Seat
                                    seat={item.seat}
                                    status={item.status}
                                    onClick={() => this.handleBlockSeat(item)} />
                            </li>
                        )
                    })}
                </ul>
                <Panel
                    count={blockedSeatsCount}
                    timer={this.state.timer}
                    blocked={this.state.blocked}
                    onClick={() => this.handleReserve()} />
            </div>
        )
    };
}

export default Theater