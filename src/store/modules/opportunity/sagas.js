import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import EActionType from '../customer/actionType';
import api from '../../../services/api';

import { getOpportunitySuccess } from './actions';

function* getDataOpportunity() {
  const customer = yield select(state => state.customer.data);

  const response = yield call(api.get, `opportunity?customerId=${customer.id}`);

  const opportunities = response.data[0].resume;

  yield put(getOpportunitySuccess(opportunities));
}

export default all([
  takeLatest(EActionType.GET_DATA_SUCCESS, getDataOpportunity),
]);
