import { combineReducers } from 'redux';
import isLoggedIn from './isLoggedInReducer';
import isLoading from './isLoadingReducer';
import message from './messagesReducer';
import user from './userReducer';
import userDash from './userDashReducer';
import rides from './ridesReducer';
import ride from './rideReducer';


const rootReducer = combineReducers({
  isLoggedIn,
  isLoading,
  message,
  user,
  userDash,
  rides,
  ride
});

export default rootReducer;
