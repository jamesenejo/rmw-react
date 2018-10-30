import constants from '../constants';
import commonAction from './commonAction';

const url = 'http://localhost:7000/api/v1/users/dashboard';
const { UPDATE_DASHBOARD } = constants;


export default history => dispatch => window.fetch(url, {
  method: 'GET',
  credentials: 'include'
})
  .then(res => res.json())
  .then((res) => {
    if (res.status === 'fail') {
      return history.push('/login?rd');
    }
    dispatch(commonAction(UPDATE_DASHBOARD, res.data));
  });
