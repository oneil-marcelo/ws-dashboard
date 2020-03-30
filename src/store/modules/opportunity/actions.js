import EActionType from './actionType';

export const getOpportunityByCustomer = customerId => ({
  type: EActionType.GET_DATA,
  customerId,
});

export const getOpportunitySuccess = opportunities => ({
  type: EActionType.GET_DATA_SUCCESS,
  opportunities,
});
