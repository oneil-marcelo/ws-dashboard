import EActionType from './actionType';

export const getFinancialByCustomer = customerId => ({
  type: EActionType.GET_DATA,
  customerId,
});

export const getFinancialSuccess = securities => ({
  type: EActionType.GET_DATA_SUCCESS,
  securities,
});
