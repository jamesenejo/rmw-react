import constants from '../constants';
import action from '../action';

const url = 'https://api-rmw.herokuapp.com/api/v1/rides';
const { FETCH_ALL_RIDES } = constants;


export default () => dispatch => window.fetch(url, { method: 'GET' })
  .then(res => res.json())
  .then((res) => {
    if (res.status === 'fail') {
      return dispatch(action(FETCH_ALL_RIDES, [res.message]));
    }
    return dispatch(action(FETCH_ALL_RIDES, res.data));
  });
