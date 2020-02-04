import React, {Component} from 'react'
import Header from './Statusbar/Header'

export default class Statusbar extends Component {
    render() {
        return (
            <div className="statusbar">
                <div className="statusbar-inner">
                    <div>
                        <Header isCollapsed={this.props.bookedSeats.length ? true : false} />

                        {this.props.bookedSeats.length > 0 &&
                            <div className="booked-seats">
                                <div className="sidebar-header">
                                    <div className="sidebar-title">
                                        Билеты:
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
                    </div>

                    <div className="btn-wrapper">
                        {this.props.bookedSeats.length > 0 &&
                            <button className="btn btn_wide" onClick={() => {this.props.handleOpenForm()}}>
                                <span className="btn-label__continue">Продолжить</span>
                                <span className="btn-label__price">{this.props.totalPrice}грн</span>
                            </button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}