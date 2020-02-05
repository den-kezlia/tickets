import React, {Component} from 'react'
import Poster from './Poster'
import Description from './Description'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isActive: false
        }
    }

    scrollHeaderToTop() {
        document.getElementById('js-header__inner').scrollTop = 0
    }

    componentDidUpdate() {
        this.scrollHeaderToTop()
    }

    handleCollapse() {
        this.setState({isActive: !this.state.isActive})
        this.scrollHeaderToTop()
    }

    render() {
        let headerClass = 'header';
        if (this.props.isCollapsed) {
            if (!this.state.isActive) {
                headerClass = 'header header_collapsed'
            } else {
                headerClass = 'header header_active'
            }
        }

        return (
            <div className={headerClass}>
                <div className="header__inner" id="js-header__inner">
                    <Poster />
                    <Description />
                </div>
                {this.props.isCollapsed &&
                    <button className="button__collapse" onClick={() => {this.handleCollapse()}}></button>
                }

                <style global jsx>{`
                    .header {
                        position: relative;
                        height: 100vh;
                        margin: -10px -10px 20px;
                        transition: height ease-in 0.3s;
                    }

                    .header .header__inner {
                        height: 100%;
                        overflow: auto;
                    }

                    .header_collapsed {
                        height: 120px;
                        overflow: initial;
                    }

                    .header_collapsed .poster {
                        margin-top: -140%;
                    }

                    .header_collapsed .header__inner {
                        height: 100%;
                        overflow: hidden;
                    }

                    .header_active {
                        height: 40vh;
                    }

                    .header_active .poster {
                        margin-top: 0;
                    }

                    .button__collapse {
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        background: white;
                        border: 1px solid #704652;
                        border-radius: 50%;
                        padding: 0;
                        left: 50%;
                        bottom: 0;
                        transform: translateY(50%) translateX(-50%);
                        transition: bottom ease-in 0.3s;
                    }
                `}</style>
            </div>

        )
    }
}