/*
 * Copyright (c) 2020 WiseAI Inc. All rights reserved.
 */

import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from './containers/Home/Home';
import Landing from './containers/Landing/Landing';
import Login from './containers/Login/Login';
import MyPage from './containers/MyPage/MyPage';

import './App.css';

function PrivateRoute({component: Component, authed, path, ...rest}) {
  var redirectPath = '/landing';
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: redirectPath, state: {from: props.location}}} />}
    />
  )
}

class App extends React.Component {
  render() {
    var authed = false;
    if (this.props.loginResult.isLoggedIn) {
      authed = true;
    }

    return (
      <Router>
        <PrivateRoute path='/' exact authed={authed} component={Home} />
        <PrivateRoute path='/home' authed={authed} component={Home} />
        <Route path='/landing' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/mypage' component={MyPage} />
      </Router>
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

export default connect(mapStateToProps)(App);
