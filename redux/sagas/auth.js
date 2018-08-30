import {
  all,
  call,
  put,
  race,
  takeLatest,
  take,
  select
} from 'redux-saga/effects';
import {
  SENDING_REQUEST,
  REGISTER_REQUEST,
  LOGOUT,
  SET_AUTH,
  LOGIN_REQUEST,
  REQUEST_ERROR,
  RESET_REQUEST
} from '../constants/auth';

import api from '../../services/api';
import Router from 'next/router';

export function* login(action) {
  const { payload } = action;
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const response = yield call(api.loginUser, payload);
    localStorage.setItem('food_token', response.data.token);
    //yield put({ type: SET_AUTH, payload: response.data.token });
    if (response.data.token) {
      console.log('Login');
      Router.push('/');
    }
  } catch (error) {
    yield all([
      put({ type: REQUEST_ERROR, error: error.message }),
      put({ type: SENDING_REQUEST, sending: false })
    ]);
  }
}

export function* register(action) {
  const { payload } = action;
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const response = yield call(api.createUser, payload);
    localStorage.setItem('food_token', response.data.token);
    //yield put({ type: SET_AUTH, payload: response.data.token });
    Router.push('/login');
  } catch (error) {
    yield all([
      put({ type: REQUEST_ERROR, error: error.message }),
      put({ type: SENDING_REQUEST, sending: false })
    ]);
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(REGISTER_REQUEST, register),
    takeLatest(LOGIN_REQUEST, login)
  ]);
}
