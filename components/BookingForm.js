import React, {Component} from 'react'
import PhoneInput from 'react-phone-input-2'

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
                                <label htmlFor="name">Имя</label>
                                <input id="name" name="name" className="input" type="text" placeholder="Имя" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Телефон</label>
                                <PhoneInput id="phone" name="phone" country={'ua'} />
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