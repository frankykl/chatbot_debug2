/*
 * Copyright (c) 2020 WiseAI Inc. All rights reserved.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import {
    loginSend
  , loginInvalidate
} from './../../actions';

const CLIENT_ID = '23434295546-o23g1jolqda3cc3h2vt9pr7265rnjuhi.apps.googleusercontent.com';

class GoogleLoginBtn extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login(response) {
    if (response.getAuthResponse().id_token) {
      var user_type = 'CONSUMER';
      if (this.props.user_type) {
        user_type = this.props.user_type;
      }
      this.props.dispatch(loginSend(response.getAuthResponse().id_token, 'Google', user_type));
    }
  }

  logout(response) {
    this.props.dispatch(loginInvalidate());
  }

  handleLoginFailure(response) {
    // TODO: Remove this in production.
    alert('Failed to log in. Use test user instead.')
    var user_type = 'CONSUMER';
    if (this.props.user_type) {
      user_type = this.props.user_type;
    }
    this.props.dispatch(loginSend('testuser-0001', 'Test', user_type));
  }

  handleLogoutFailure(response) {
    this.props.dispatch(loginInvalidate());
  }

  render() {
    return (
      <div>
        { this.props.loginResult.isLoggedIn ?
          <GoogleLogout
            clientId={ CLIENT_ID }
            buttonText='Logout'
            onLogoutSuccess={ this.logout }
            onFailure={ this.handleLogoutFailure }
          >
          </GoogleLogout> : <GoogleLogin
            clientId={ CLIENT_ID }
            buttonText='Login'
            onSuccess={ this.login }
            onFailure={ this.handleLoginFailure }
            cookiePolicy={ 'single_host_origin' }
          />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {
    loginResult
  } = state;

  return {
    loginResult
  };
}

export default connect(mapStateToProps)(GoogleLoginBtn);
