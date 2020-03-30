import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import EActionType from '../customer/actionType';
import api from '../../../services/api';

import { getFinancialSuccess } from './actions';

function* getDataFinancial() {
  const customer = yield select(state => state.customer.data);

  const response = yield call(api.get, `financial?customerId=${customer.id}`);

  const { securities } = response.data[0];

  yield put(getFinancialSuccess(securities));
}

export default all([
  takeLatest(EActionType.GET_DATA_SUCCESS, getDataFinancial),
]);
