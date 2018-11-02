import constants from '../constants';
import action from '../action';

const {
  LOGIN_STATUS,
  SET_CURRENT_USER
} = constants;

const url = 'https://api-rmw.herokuapp.com/api/v1/users/profile';


export default () => dispatch => window.fetch(url, {
  method: 'GET',
  credentials: 'include'
}).then(res => res.json()).then((res) => {
  if (res.status === 'fail') {
    return dispatch(action(LOGIN_STATUS, false));
  }
  dispatch(action(SET_CURRENT_USER, res.data));
  return dispatch(action(LOGIN_STATUS, true));
});
