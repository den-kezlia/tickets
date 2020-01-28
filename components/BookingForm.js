import React, {Component} from 'react'

import CST from '../config/CST'
import SuccessFormMessage from './SuccessFormMessage'
import ErrorFormMessage from './Errors/ErrorFormMessage'
import Input from './Form/Input'
import InputPhone from './Form/InputPhone'
import Button from './Form/Button'

export default class BookingForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showSuccessFormMessage: false,
            showErrorFormMessage: false,
            form: {
                name: {
                    id: 'name',
                    label: 'Имя',
                    type: 'text',
                    required: true,
                    error: '',
                    value: ''
                },
                email: {
                    id: 'email',
                    label: 'Email',
                    type: 'email',
                    required: true,
                    error: '',
                    value: ''
                },
                phone: {
                    id: 'phone',
                    label: 'Телефон',
                    type: 'number',
                    required: true,
                    error: '',
                    value: ''
                },
                button: {
                    label: 'Забронировать',
                    type: 'submit',
                }
            }
        }
    }

    handleCloseBookingForm() {
        this.setState({
            showSuccessFormMessage: false,
            showErrorFormMessage: false
        })

        this.props.handleCloseBookingForm()
    }

    handleChange(e) {
        const form = this.state.form

        if (e.target !== undefined) {
            form[e.target.name].value = e.target.value
            form[e.target.name].error = e.target.value ? '' : 'Поле обязательно для заполнения'
        } else {
            form.phone.value = e;
            form.phone.error = e ? '' : 'Поле обязательно для заполнения'
        }

        this.setState({form: form})
    }

    handleBooking(e) {
        e.preventDefault()
        const form = this.state.form
        const bookedSeats = this.props.bookedSeats
        let fieldsError = false;

        if (!form.name.value.length) {
            form.name.error = 'Поле обязательно для заполнения';
            fieldsError = true
        } else {
            form.name.error = ''
        }

        if (!form.email.value.length) {
            form.email.error = 'Поле обязательно для заполнения';
            fieldsError = true
        } else {
            form.email.error = ''
        }

        if (!form.phone.value.length) {
            form.phone.error = 'Поле обязательно для заполнения';
            fieldsError = true
        } else {
            form.phone.error = ''
        }

        if (!fieldsError) {
            this.bookSeats(form, bookedSeats)
        }
    }

    bookSeats = async function (form, bookedSeats) {
        const response = await fetch('/api/bookSeats', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({form, bookedSeats})
        });
        const data = await response.json();

        try {
            if (data.status === CST.ERROR.ERROR) {
                this.setState({error: data})
                this.setState({showErrorFormMessage: true})
            } else {
                this.setState({showSuccessFormMessage: true})
            }

            this.props.handleBooking(data.status === CST.ERROR.ERROR)
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <div className="overlay"></div>

                <div className="modal-body booking-body">
                    <div className="modal-header booking-header">
                        <div className="modal-title booking-title">Бронирование билетов</div>
                        <button onClick={() => {this.handleCloseBookingForm()}}>close</button>
                    </div>

                    <div className="modal-content booking-content">
                        {this.state.showSuccessFormMessage &&
                            <SuccessFormMessage />
                        }

                        {this.state.showErrorFormMessage &&
                            <ErrorFormMessage error={this.state.error} />
                        }

                        {(!this.state.showSuccessFormMessage && !this.state.showErrorFormMessage) &&
                            <form onSubmit={(e) => {this.handleBooking(e)}}>
                                <Input input={this.state.form.name} handleChange={(e) => this.handleChange(e)} />
                                <Input input={this.state.form.email} handleChange={(e) => this.handleChange(e)} />
                                <InputPhone input={this.state.form.phone} handleChange={(e) => this.handleChange(e)} />

                                <Button input={this.state.form.button} />
                            </form>
                        }
                    </div>
                </div>
            </div>
        )
    }
}