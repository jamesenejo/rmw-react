import { combineReducers } from 'redux';
import isLoggedIn from './loginReducer';

const rootReducer = combineReducers({
  isLoggedIn
});

export default rootReducer;
