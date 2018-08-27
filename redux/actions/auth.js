import {
  SENDING_REQUEST,
  REGISTER_REQUEST,
  LOGOUT,
  SET_AUTH,
  LOGIN_REQUEST,
  REQUEST_ERROR
} from '../constants/auth';

import { createAction } from 'redux-actions';

export const setAuthState = createAction(SET_AUTH);

export const sendingRequest = createAction(SENDING_REQUEST);

export const loginRequest = createAction(LOGIN_REQUEST);

export const logout = createAction(LOGOUT);

export const registerRequest = createAction(REGISTER_REQUEST);

export const requestError = createAction(REQUEST_ERROR);
