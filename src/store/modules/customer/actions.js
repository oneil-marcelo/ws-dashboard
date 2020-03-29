import EActionType from './actionType';

export const getCustomerById = id => ({
  type: EActionType.GET_DATA,
  id,
});

export const getCustomerSuccess = customer => ({
  type: EActionType.GET_DATA_SUCCESS,
  customer,
});
