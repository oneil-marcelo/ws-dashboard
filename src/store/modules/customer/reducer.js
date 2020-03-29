import EActionType from './actions';

const INITIAL_STATE = {
  loading: false,
  message: '',
  data: [],
};

export default function customer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EActionType.DATA_SUCCESS:
      return state;
    default:
      return state;
  }
}
