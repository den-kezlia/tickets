import React, {Component} from 'react'

export default class Input extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.input.id}>{this.props.input.label}</label>
                <input
                    id={this.props.input.id}
                    name={this.props.input.id}
                    value={this.props.input.value}
                    className="input"
                    type={this.props.input.type}
                    placeholder={this.props.input.label}
                    required={this.props.input.required}
                    onChange={(e) => this.props.handleChange(e)} />

                {this.props.input.error && (
                    <div className="form-error">{this.props.input.error}</div>
                )}
            </div>
        )
    }
}