import { all } from 'redux-saga/effects';

import customer from './customer/sagas';
import opportunity from './opportunity/sagas';

export default function* rootSaga() {
  yield all([customer, opportunity]);
}
