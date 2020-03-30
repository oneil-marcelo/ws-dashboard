import { combineReducers } from 'redux';

import customer from './customer/reducer';
import opportunity from './opportunity/reducer';
import credit from './credit/reducer';

const rootReducer = combineReducers({ customer, opportunity, credit });

export default rootReducer;
