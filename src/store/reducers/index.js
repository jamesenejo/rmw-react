import { combineReducers } from 'redux';
import isLoggedIn from './isLoggedInReducer';
import isLoading from './isLoadingReducer';
import message from './messagesReducer';
import user from './userReducer';
import userDash from './userDashReducer';


const rootReducer = combineReducers({
  isLoggedIn,
  isLoading,
  message,
  user,
  userDash
});

export default rootReducer;
