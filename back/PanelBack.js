import React, {Component} from 'react';

class Panel extends Component {
    render() {
        return(
            <div className="panel">
                <div className="panel-inner">
                    <div className="selected">
                        <div className="count">{this.props.count}</div>
                        <div className="price">{this.props.price}</div>
                    </div>
                    <div>
                        {this.props.blocked &&
                            <span>time left: <span>{this.props.timer}</span></span>
                        }
                        <button disabled={this.props.blocked} className="reserve" onClick={this.props.onClick}>Reserve</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Panel