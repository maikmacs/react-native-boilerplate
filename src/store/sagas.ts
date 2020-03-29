import {fork} from 'redux-saga/effects';
import startupSaga from './startup/sagas';

export default function* appSaga() {
  yield fork(startupSaga);
}
