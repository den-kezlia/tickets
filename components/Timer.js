import React, {Component} from 'react'

export default class Timer extends Component {
    render() {
        return (
            <div>
                {this.props.timer > 0 &&
                    <div>Осталось {this.props.timer} секунд</div>
                }
            </div>
        )
    }
}