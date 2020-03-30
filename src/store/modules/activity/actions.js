import EActionType from './actionType';

export const getActivityByCustomer = customerId => ({
  type: EActionType.DATA_REQUEST,
  customerId,
});

export const getActivitySuccess = activities => ({
  type: EActionType.DATA_REQUEST_SUCCESS,
  activities,
});
