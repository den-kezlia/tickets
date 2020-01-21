import React, {Component} from 'react'
import PhoneInput from 'react-phone-input-2'

export default class InputPhone extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.input.id}>{this.props.input.label}</label>
                <PhoneInput
                    id={this.props.input.id}
                    name={this.props.input.id}
                    value={this.props.input.value}
                    country={'ua'}
                    onChange={(e) => this.props.handleChange(e)} />

                {this.props.input.error && (
                    <div className="form-error">{this.props.input.error}</div>
                )}
            </div>
        )
    }
}