import { all } from 'redux-saga/effects';

import customer from './customer/sagas';
import opportunity from './opportunity/sagas';
import credit from './credit/sagas';
import financial from './financial/sagas';
import activity from './activity/sagas';

export default function* rootSaga() {
  yield all([customer, opportunity, credit, financial, activity]);
}
