import React, {Component} from 'react'
import PhoneInput from 'react-phone-input-2'

import Timer from './Timer'

export default class BookingForm extends Component {
    render() {
        return (
            <div>
                <div className="overlay"></div>

                <div className="modal-body booking-body">
                    <div className="modal-header booking-header">
                        <div className="modal-title booking-title">Бронирование билетов</div>
                        <button onClick={() => {this.props.handleCloseBookingForm()}}>close</button>
                    </div>

                    <div className="modal-content booking-content">
                        {this.props.showSuccessFormMessage ? (
                            <div>
                                Спасибо, мы свяжемся с вами в ближайшее время для подтверждения.
                            </div>
                        ) : (
                            <form onSubmit={(e) => {this.props.handleBooking(e)}}>
                                <Timer timer={this.props.timer} />

                                <div className="form-group">
                                    <label htmlFor="name">Имя</label>
                                    <input id="name" name="name" onChange={(e) => this.props.handleFieldChange(e)} value={this.props.form.name} className="input" type="text" placeholder="Имя" required />
                                    {this.props.form.nameError && (
                                        <div class="form-error">{this.props.form.nameError}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" name="email" onChange={(e) => this.props.handleFieldChange(e)} value={this.props.form.email} type="email" placeholder="Email" required />
                                    {this.props.form.emailError && (
                                        <div class="form-error">{this.props.form.emailError}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Телефон</label>
                                    <PhoneInput id="phone" name="phone" onChange={(e) => this.props.handleFieldChange(e)} value={this.props.form.phone} country={'ua'} />
                                    {this.props.form.phoneError && (
                                        <div class="form-error">{this.props.form.phoneError}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" type="submit">Забронировать</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}