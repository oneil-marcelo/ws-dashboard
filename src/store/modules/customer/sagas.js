import { all, takeLatest, call, put } from 'redux-saga/effects';

import EActionType from './actionType';
import { getCustomerSuccess } from './actions';

import api from '../../../services/api';

function* getDataCustomer({ id }) {
  const response = yield call(api.get, `customer/${id}`);

  const customer = response.data;

  yield put(getCustomerSuccess(customer));
}

export default all([takeLatest(EActionType.GET_DATA, getDataCustomer)]);
