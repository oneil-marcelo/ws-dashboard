import EActionType from './actionType';

export const getData = id => ({
  type: EActionType.GET_DATA,
  id,
});

export const getDataSuccess = customer => ({
  type: EActionType.GET_DATA_SUCCESS,
  customer,
});
