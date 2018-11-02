import constants from '../constants';
import action from '../action';

const { FETCH_A_RIDE, UPDATE_MESSAGES } = constants;


export default id => dispatch => window.fetch(
  `https://api-rmw.herokuapp.com/api/v1/rides/${id}`,
  { method: 'GET' }
)
  .then(res => res.json())
  .then((res) => {
    if (res.status === 'fail') {
      return dispatch(action(UPDATE_MESSAGES, {
        messages: [res.message], isSuccess: false
      }));
    }
    return dispatch(action(FETCH_A_RIDE, res.data));
  });
