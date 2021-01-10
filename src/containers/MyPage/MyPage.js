/*
 * Copyright (c) 2020 WiseAI Inc. All rights reserved.
 */

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MyPage extends Component {
  render() {
    return (
      <div>
        MyPage<br /><br />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {
  } = state;

  return {
  };
}

export default connect(mapStateToProps)(MyPage);
