import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import {logIn} from '../util/WebRequests'
import { Redirect } from 'react-router-dom'

export default class Facebook extends Component {
  state = {
    redirectAction: '',
    email: ''
  }

  setRedirectAction = (action) => {
    this.setState({
      action: 'SIGNED_UP'
    })
  }
  setEmail = (email) => {
    this.setState({email});
  }

  componentClicked = () => console.log('Clicked');

  logUserIn = (response) => {
    const { status } = response;
    if (status === 'unknown') {
      alert('Please accept to continue');
    }

    if (response.email && response.name) {
      //TODO make the backend request to save and log the user in
      this.setEmail(response.email);
      logIn(response).then(action => {
        this.setRedirectAction(action);
      });
    }
  }


  renderRedirect = () => {
    const { action = '', email } = this.state;

    if (action === 'SIGNED_UP') {
      return <Redirect to={{
        pathname: '/signup',
        state: { userId: '123', sessionToken: 'TODO', email}
      }} />
    } else if (action === 'LOGGED_IN') {
      return <Redirect to='/homepage' />
    }
  }

  render () {
    return (
       <div>
        {this.renderRedirect()}
        <FacebookLogin
          appId="263597774312502"
          autoLoad={false}
          fields="name,email"
          onClick={this.componentClicked}
          callback={this.logUserIn} />
       </div>
    )
  }
}
