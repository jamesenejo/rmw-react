import { combineReducers } from 'redux';
import isLoggedIn from './isLoggedInReducer';
import isLoading from './isLoadingReducer';
import messages from './messagesReducer';
import user from './userReducer';
import userDash from './userDashReducer';


const rootReducer = combineReducers({
  isLoggedIn,
  isLoading,
  messages,
  user,
  userDash
});

export default rootReducer;
