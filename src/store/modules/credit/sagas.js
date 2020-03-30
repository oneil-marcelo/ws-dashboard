import { call, all, takeLatest, put, select } from 'redux-saga/effects';

import EActionType from '../customer/actionType';
import api from '../../../services/api';

import { getCreditSuccess } from './actions';

function* getDataCredit() {
  const customer = yield select(state => state.customer.data);

  const response = yield call(api.get, `credit?customerId=${customer.id}`);

  const credit = response.data[0];

  yield put(getCreditSuccess(credit));
}

export default all([takeLatest(EActionType.GET_DATA_SUCCESS, getDataCredit)]);
