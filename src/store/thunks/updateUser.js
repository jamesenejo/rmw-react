import constants from '../constants';
import action from '../action';

const url = 'https://api-rmw.herokuapp.com/api/v1/users/profile';
const {
  SET_CURRENT_USER,
  LOGIN_STATUS
} = constants;


export default history => dispatch => window.fetch(url, {
  method: 'GET',
  credentials: 'include'
})
  .then(res => res.json())
  .then((res) => {
    if (res.status === 'fail') {
      dispatch(action(LOGIN_STATUS, false)); // maintain logout status
      return history.push('/login?rd');
    }
    dispatch(action(LOGIN_STATUS, true)); // set user as logged in
    dispatch(action(SET_CURRENT_USER, res.data));
  });
