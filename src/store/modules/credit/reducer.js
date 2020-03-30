import EActionType from './actionType';

const INITIAL_STATE = {
  loading: false,
  message: '',
  data: [],
};

export default function credit(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EActionType.DATA_REQUEST:
      return { ...state, loading: true };
    case EActionType.DATA_REQUEST_SUCCESS:
      return { ...state, loading: false, data: action.credit };
    default:
      return state;
  }
}
