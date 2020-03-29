import EActionType from './actionType';

const INITIAL_STATE = {
  loading: false,
  message: '',
  data: {},
};

export default function customer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EActionType.GET_DATA:
      return { ...state, loading: true };
    case EActionType.GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.customer,
      };
    default:
      return state;
  }
}
