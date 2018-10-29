import constants from '../constants';
import commonAction from './commonAction';

const {
  LOGIN_STATUS
} = constants;

const url = 'http://localhost:7000/api/v1/users/profile';


export default () => dispatch => window.fetch(url, {
  method: 'GET',
  credentials: 'include'
}).then(res => res.json()).then((res) => {
  if (res.status === 'fail') {
    return dispatch(commonAction(LOGIN_STATUS, false));
  }
  return dispatch(commonAction(LOGIN_STATUS, true));
});
