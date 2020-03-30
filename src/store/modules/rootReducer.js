import { combineReducers } from 'redux';

import customer from './customer/reducer';
import opportunity from './opportunity/reducer';

const rootReducer = combineReducers({ customer, opportunity });

export default rootReducer;
