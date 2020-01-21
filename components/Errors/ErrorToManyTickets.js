import React, {Component} from 'react'
import CST from '../../config/CST'

export default class ErrorToManyTickets extends Component {
    render() {
        return (
            <div>
                <div className="error-message">
                    Максимально можно заказать {CST.MAX_SEATS_TO_BOOK} билетов.
                </div>
            </div>
        )
    }
}