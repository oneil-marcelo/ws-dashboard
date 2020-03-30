import EActionType from './actionType';

const INITIAL_STATE = {
  isOpen: true,
  height: '100vh',
  width: '73px',
  padding: '40px 0',
};

export default function menu(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EActionType.TOGGLE_MENU:
      if (state.isOpen)
        return { isOpen: false, height: 0, width: 0, padding: 0 };
      return INITIAL_STATE;
    default:
      return state;
  }
}
