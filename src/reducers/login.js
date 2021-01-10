/*
 * Copyright (c) 2020 WiseAI Inc. All rights reserved.
 */

import {
  LOGIN_INVALIDATE,
  LOGIN_START,
  LOGIN_COMPLETE,
} from './../actions';

function loginResult(
  state = {
      isLoggedIn: false
    , token: ''
    , provider: ''
    , user_id: 0
    , user_type: ''
  },
  action
) {
  switch (action.type) {
    case LOGIN_INVALIDATE:
      return Object.assign({}, state, {
          isLoggedIn: false
        , token: ''
        , provider: ''
        , user_id: 0
        , user_type: ''
      });
    case LOGIN_START:
      return Object.assign({}, state, {
          isLoggedIn: false
        , token: ''
        , provider: ''
        , user_id: 0
        , user_type: ''
      });
    case LOGIN_COMPLETE:
      return Object.assign({}, state, {
          isLoggedIn: action.isLoggedIn
        , token: action.token
        , provider: action.provider
        , user_id: action.user_id
        , user_type: action.user_type
      });
    default:
      return state;
  }
}

export { loginResult };
