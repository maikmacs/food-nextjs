import { takeLatest, put, fork } from 'redux-saga/effects';
import authSaga from './auth';
import paypalSucess from './paypal';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(paypalSucess);
}
