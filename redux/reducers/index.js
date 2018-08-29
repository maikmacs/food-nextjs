import { combineReducers } from 'redux';
import auth from '../reducers/auth';
import { cartReducer as cart } from 'react-redux-shopping-cart';

export default combineReducers({
  auth,
  cart
});
