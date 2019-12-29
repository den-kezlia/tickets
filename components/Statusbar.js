import React, {Component} from 'react'
import Timer from './Timer'

export default class Statusbar extends Component {
    render() {
        return (
            <div className="statusbar">
                <div className="statusbar-inner">
                    {this.props.bookedSeats.length > 0 &&
                        <div className="booked-seats">
                            <div className="sidebar-header">
                                <div className="sidebar-title">
                                    Забронированные места:
                                </div>
                                <div className="tickets-count">
                                    <span>{this.props.bookedSeats.length} мест</span>
                                    <span>{this.props.totalPrice}грн</span>
                                </div>
                            </div>

                            <ul className="booked-list">
                                {this.props.bookedSeats.map((item) => {
                                    return (
                                        <li className="booked-seat" key={'booked-' + item.id}>
                                            <span>
                                                {item.id} - {item.price}грн
                                            </span>
                                            <button onClick={() => {this.props.handleUnBookSeat(item.id)}}>X</button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    }

                    <div className="btn-wrapper">
                        <Timer timer={this.props.timer} />

                        {this.props.bookedSeats.length > 0 &&
                            <button className="btn" onClick={() => {this.props.handleOpenForm()}}>Продолжить</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}