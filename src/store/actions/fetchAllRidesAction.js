import constants from '../constants';
import commonAction from './commonAction';

const url = 'https://api-rmw.herokuapp.com/api/v1/rides';
const { FETCH_ALL_RIDES } = constants;


export default () => dispatch => window.fetch(url, { method: 'GET' })
  .then(res => res.json())
  .then((res) => {
    if (res.status === 'fail') {
      return dispatch(commonAction(FETCH_ALL_RIDES, [res.message]));
    }
    return dispatch(commonAction(FETCH_ALL_RIDES, res.data));
  });
