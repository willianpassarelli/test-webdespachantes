import { all } from 'redux-saga/effects';

import consultSaga from './consult/sagas';

export default function* rootSaga() {
  return yield all([consultSaga]);
}
