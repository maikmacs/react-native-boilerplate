import {takeLatest, all} from 'redux-saga/effects';
import {STARTUP} from './constants';

export function* startupAPP() {
  console.log('startupAPP');
}

export default function* startupSaga() {
  yield all([takeLatest(STARTUP, startupAPP)]);
}
