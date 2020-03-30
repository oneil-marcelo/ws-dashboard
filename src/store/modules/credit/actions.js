import EActionType from './actionType';

export const getCreditByCustomer = customerId => ({
  type: EActionType.DATA_REQUEST,
  customerId,
});

export const getCreditSuccess = credities => ({
  type: EActionType.DATA_REQUEST_SUCCESS,
  credities,
});
