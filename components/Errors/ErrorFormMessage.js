import React, {Component} from 'react'
import CST from '../../config/CST'
import ErrorSoldSeats from './ErrorSoldSeats'
import ErrorToManyTickets from './ErrorToManyTickets'

export default class ErrorFormMessage extends Component {
    render() {
        return (
            <div>
                {this.props.error.type === CST.ERROR.SOLD_SEATS && (
                    <ErrorSoldSeats soldSeats={this.props.error.soldSeats} />
                )}

                {this.props.error.type === CST.ERROR.TO_MANY_TICKETS && (
                    <ErrorToManyTickets />
                )}
            </div>
        )
    }
}