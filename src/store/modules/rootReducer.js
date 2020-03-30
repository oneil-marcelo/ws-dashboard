import { combineReducers } from 'redux';

import customer from './customer/reducer';
import opportunity from './opportunity/reducer';
import credit from './credit/reducer';
import financial from './financial/reducer';

const rootReducer = combineReducers({
  customer,
  opportunity,
  credit,
  financial,
});

export default rootReducer;
