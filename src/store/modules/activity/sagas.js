import { call, all, takeLatest, put, select } from 'redux-saga/effects';

import EActionType from '../customer/actionType';
import api from '../../../services/api';

import { getActivitySuccess } from './actions';

function* getDataActivity() {
  const customer = yield select(state => state.customer.data);

  const response = yield call(api.get, `activity?customerId=${customer.id}`);

  const activities = response.data;

  yield put(getActivitySuccess(activities));
}

export default all([takeLatest(EActionType.GET_DATA_SUCCESS, getDataActivity)]);
