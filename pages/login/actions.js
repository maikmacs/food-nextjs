import {
  SENDING_REQUEST,
  REGISTER_REQUEST,
  LOGOUT,
  SET_AUTH,
  LOGIN_REQUEST,
  REQUEST_ERROR,
  RESET_REQUEST
} from './constants';

import { createAction } from 'redux-actions';

export const loginRequest = createAction(LOGIN_REQUEST);
