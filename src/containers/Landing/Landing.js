/*
 * Copyright (c) 2020 WiseAI Inc. All rights reserved.
 */

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Chatbot } from "react-chatbot-kit";

import wisebotConfig from "./../../bots/wisebot/config";
import wisebotMessageParser from "./../../bots/wisebot/MessageParser";
import wisebotActionProvider from "./../../bots/wisebot/ActionProvider";

import GoogleLoginBtn from './../../containers/GoogleLoginBtn/GoogleLoginBtn';

class Landing extends Component {
  render() {
    if (this.props.loginResult.isLoggedIn) {
      return (
        <Redirect to='/' />
      );
    }

    return (
      <div>
        LiveWise<br />
        Get Your Questions Answered by Experts<br /><br />
        <GoogleLoginBtn /><br />
        <Link to='/sp-landing'>For Service Providers</Link><br /><br />
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

export default connect(mapStateToProps)(Landing);
