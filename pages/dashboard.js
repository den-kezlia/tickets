import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'isomorphic-unfetch'
import clientCredentials from '../config/firebase'

import Dashboard from '../components/Dashboard/Dashboard'

export default class Index extends Component {
    static async getInitialProps({ req, query }) {
        const user = req && req.session ? req.session.decodedToken : null
        return { user }
    }

    constructor(props) {
      super(props)
      this.state = {
          user: this.props.user
      }
  }

  componentDidMount() {
    firebase.initializeApp(clientCredentials)

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return user
          .getIdToken()
          .then(token => {
            return fetch('/api/login', {
              method: 'POST',
              headers: new Headers({ 'Content-Type': 'application/json' }),
              credentials: 'same-origin',
              body: JSON.stringify({ token }),
            })
          })
          .then(() => {
            this.setState({ user: user })
          })
      } else {
        this.setState({ user: null })
        fetch('/api/logout', {
          method: 'POST',
          credentials: 'same-origin',
        })
      }
    })
  }

  handleLogin() {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  handleLogout() {
    firebase.auth().signOut()
  }

  render() {
    const { user } = this.state

    return (
      <div>
        {!user ? (
          <button onClick={this.handleLogin}>Login</button>
        ) : (
          <div>
            <Dashboard />
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        )}
      </div>
    )
  }
}