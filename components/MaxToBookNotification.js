import React, {Component} from 'react'

export default class MaxToBookNotification extends Component {
    render() {
        return (
            <div>
                <div className="overlay"></div>

                <div className="modal-body notification-body">
                    <div className="modal-header notification-header">
                        <div className="modal-title notification-title">
                            Максимально можно выбрать <span className="bold">{this.props.maxSeatsToBook}</span> билетов
                        </div>
                        <button onClick={() => {this.props.handleCloseMaxToBookNotification()}}>close</button>
                    </div>

                    <div className="modal-content">
                        <button onClick={() => {this.props.handleCloseMaxToBookNotification()}} className="btn btn-primary" type="submit">Закрыть</button>
                    </div>
                </div>
            </div>
        )
    }
}