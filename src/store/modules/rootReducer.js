import { combineReducers } from 'redux';

import customer from './customer/reducer';
import opportunity from './opportunity/reducer';
import credit from './credit/reducer';
import financial from './financial/reducer';
import activity from './activity/reducer';
import menu from './menu/reducer';

const rootReducer = combineReducers({
  customer,
  opportunity,
  credit,
  financial,
  activity,
  menu,
});

export default rootReducer;
