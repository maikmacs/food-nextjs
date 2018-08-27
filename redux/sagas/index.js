import { takeLatest, put, fork } from 'redux-saga/effects';
import authSaga from '../../pages/login/saga';

export default function* rootSaga() {
  yield fork(authSaga);
}
