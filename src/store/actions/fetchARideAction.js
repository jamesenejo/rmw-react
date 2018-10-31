import constants from '../constants';
import commonAction from './commonAction';

const { FETCH_A_RIDE, UPDATE_MESSAGES } = constants;


export default id => dispatch => window.fetch(
  `https://api-rmw.herokuapp.com/api/v1/rides/${id}`,
  { method: 'GET' }
)
  .then(res => res.json())
  .then((res) => {
    if (res.status === 'fail') {
      return dispatch(commonAction(UPDATE_MESSAGES, {
        messages: [res.message], isSuccess: false
      }));
    }
    return dispatch(commonAction(FETCH_A_RIDE, res.data));
  });
