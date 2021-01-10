/*
 * Copyright (c) 2020 WiseAI Inc. All rights reserved.
 */

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Chatbot } from "react-chatbot-kit";

import wisebotConfig from "./../../bots/wisebot/config";
import wisebotMessageParser from "./../../bots/wisebot/MessageParser";
import wisebotActionProvider from "./../../bots/wisebot/ActionProvider";

import GoogleLoginBtn from './../../containers/GoogleLoginBtn/GoogleLoginBtn';

class Home extends Component {
  render() {
    if (!this.props.loginResult.isLoggedIn) {
      return (
        <Redirect to='/' />
      );
    }
    if (this.props.loginResult.user_type === 'SERVICE_PROVIDER') {
      return (
        <Redirect to='/sp-home' />
      );
    }

    return (
      <div>
        Home<br /><br />
        <GoogleLoginBtn /><br />
        <div className="app-wisebot-section" id="wisebot">
          <div className="app-wisebot">
            <div className="app-wisebot-container">
              <div className="app-wisebot">
                <div className="app-wisebot-bot-container">
                  <Chatbot
                    config={wisebotConfig}
                    messageParser={wisebotMessageParser}
                    actionProvider={wisebotActionProvider}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps)(Home);
