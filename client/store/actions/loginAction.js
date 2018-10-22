import constants from '../constants';
import commonAction from './commonAction';

const url = 'http://localhost:7000/api/v1/auth/login';
const {
  LOGIN_STATUS,
  LOADING_STATUS,
  UPDATE_MESSAGES
} = constants;


export default (userData, history) => dispatch => {
  console.log(userData);
  window.fetch(url, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
    .then(res => res.json())
    .then(res => {
      if (res.status === 'fail') {
        // keep loading status false
        dispatch(commonAction(LOGIN_STATUS, false));
        // send error message
        dispatch(commonAction(UPDATE_MESSAGES, [res.message]));
        // turn off spinner
        dispatch(commonAction(LOADING_STATUS, false));
        // clear messages
        return setTimeout(() => {
          dispatch(commonAction(UPDATE_MESSAGES, []));
        }, 4000);
      }
      dispatch(commonAction(LOGIN_STATUS, true));
      history.push('/dashboard');
    })
    .catch(error => {
      dispatch(commonAction(LOGIN_STATUS, false)); // keep loading status false
      dispatch(commonAction(UPDATE_MESSAGES, ['An error occurred'])); // send error message
      dispatch(commonAction(LOADING_STATUS, false)); // turn off spinner

      // clear messages
      return setTimeout(() => {
        dispatch(commonAction(UPDATE_MESSAGES, []));
      }, 4000);
    });
};
