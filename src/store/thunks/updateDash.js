import constants from '../constants';
import action from '../action';

const url = 'https://api-rmw.herokuapp.com/api/v1/users/dashboard';
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
    dispatch(action(UPDATE_DASHBOARD, res.data));
  });
