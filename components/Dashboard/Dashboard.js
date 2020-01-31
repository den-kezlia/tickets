import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch';

export default class Dashboard extends Component {
    getInitialProps() {
        this.getTeam()
    }

    constructor(props) {
        super(props)

        this.state = {
            team: ''
        }
    }

    componentDidMount() {
        this.getTeam()
    }

    getTeam = async function() {
        try {
            const response = await fetch('/api/getTeam', {
                method: 'GET',
                credentials: 'same-origin',
            })
            const data = await response.json()

            if (data) {
                this.setState({ team: data.team })
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const team = this.state.team

        return (
            <div>
                <div>Dashboard</div>
                {team &&
                    <ul>
                        {team.map(item => {
                            return (<li key={item}>{item}</li>)
                        })}
                    </ul>
                }
            </div>
        )
    }
}
