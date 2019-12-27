import React, {Component} from 'react';

class Seat extends Component {
    render() {
        let buttonClassName = 'seat ' + this.props.status;
        //let buttonDisabled = this.state.status !== 'free' ? 'disabled' : '';

        return (
            <button
                className={buttonClassName}
                onClick={() => this.props.onClick()}>
                    {this.props.seat}
            </button>
        )
    }
}

export default Seat