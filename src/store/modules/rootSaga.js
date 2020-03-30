import { all } from 'redux-saga/effects';

import customer from './customer/sagas';
import opportunity from './opportunity/sagas';
import credit from './credit/sagas';

export default function* rootSaga() {
  yield all([customer, opportunity, credit]);
}
