/*
 * Copyright (c) 2020 WiseAI Inc. All rights reserved.
 */

import fetch from 'cross-fetch';

export const LOGIN_INVALIDATE = 'LOGIN_INVALIDATE';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';

export function loginInvalidate() {
  return {
    type: LOGIN_INVALIDATE,
  };
}

function loginStart() {
  return {
    type: LOGIN_START,
  };
}

export function loginComplete(isLoggedIn, token, provider, user_id, user_type) {
  return {
      type: LOGIN_COMPLETE
    , isLoggedIn: isLoggedIn
    , token: token
    , provider: provider
    , user_id: user_id
    , user_type: user_type
  };
}

export function loginSend(token, provider, type) {
  return dispatch => {
    dispatch(loginStart());

    // TODO: Set URL from configuration.
    const newUser = {
      user_type: type
    };
    const uri = encodeURI('http://' + window.location.hostname + ':4101/ias/v0/user');
    const requestOptions = {
        method: 'POST'
      , headers: {
            'Authorization': 'Bearer ' + token
          , 'X-Authentication-Provider': provider
          , 'Content-Type': 'application/json'
        }
      , body: JSON.stringify(newUser)
    };

    return fetch(uri, requestOptions)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      }).then(response => response.json()
      ).then(function(json) {
        console.log('User ID is ' + json.user_id);
        dispatch(loginComplete(true, token, provider, json.user_id, json.user_type))
      }).catch(function(error) {
        console.log(error);
        dispatch(loginComplete(false, '', provider, 0, ''));
      });
  }
}
