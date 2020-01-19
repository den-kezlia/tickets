import React, {Component} from 'react'

export default class ErrorFormMessage extends Component {
    render() {
        return (
            <div>
                <div className="error-message">
                    Извините, но кто-то уже успел купить место. Выберите, пожалуйста, другое место.
                </div>
                <div>
                    Кем-то купленные места:
                    <ul>
                        {this.props.error.soldSeats.map(seat => {
                            return (<li key={'sold-seat-' + seat}>{seat}</li>)
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}