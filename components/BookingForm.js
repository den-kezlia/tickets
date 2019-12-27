import React, {Component} from 'react'

export default class BookingForm extends Component {
    render() {
        return (
            <div>
                <div className="overlay"></div>

                <div className="booking-body">
                    <div className="booking-header">
                        <div className="booking-title">Бронирование билетов</div>
                        <button onClick={() => {this.props.handleCloseBookingForm()}}>close</button>
                    </div>

                    <div className="booking-form">
                         <form onSubmit={this.props.handleBooking()}>
                            <div className="form-group">
                                <input className="input" type="text" placeholder="Имя, Фамилия" required />
                            </div>
                            <div className="form-group">
                                <input className="input" type="email" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <input className="input" type="text" placeholder="Номер Телефона" required />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" type="submit">Забронировать</button>
                            </div>
                         </form>
                    </div>
                </div>
            </div>
        )
    }
}