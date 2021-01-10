/*
 * Copyright (c) 2020 WiseAI Inc. All rights reserved.
 */

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import GoogleLoginBtn from './../../containers/GoogleLoginBtn/GoogleLoginBtn';

class Login extends Component {
  render() {
    if (this.props.loginResult.isLoggedIn) {
      return (
        <Redirect to='/' />
      );
    }

    return (
      <div>
        <GoogleLoginBtn /><br />
      </div>
    );
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

export default connect(mapStateToProps)(Login);
