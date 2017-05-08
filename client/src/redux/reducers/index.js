import { combineReducers } from 'redux';

import account from './account';
import cart from './cart';
import cats from './cats';
import orders from './order'
import courses from './courses';

const rootReducer = combineReducers({
  account,
  cart,
  cats,
  courses,
  orders
});

export default rootReducer;
