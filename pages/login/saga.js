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
} from './constants';

import api from '../../services/api';

export function* login(action) {
  const { payload } = action;

  try {
    const response = yield call(api.loginUser, payload);

    yield put({ type: SET_AUTH, payload: response.data.token });
  } catch (error) {
    console.log(error);
  }
}

export default function* authSaga() {
  yield all([takeLatest(LOGIN_REQUEST, login)]);
}
