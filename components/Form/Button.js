import React, {Component} from 'react'

export default class Button extends Component {
    render() {
        return (
            <div className="form-group">
                <button className="btn btn-primary" type={this.props.input.type}>
                    {this.props.input.label}
                </button>
            </div>
        )
    }
}