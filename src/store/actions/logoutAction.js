import constants from '../constants';
import commonAction from './commonAction';

const { LOGIN_STATUS, UPDATE_MESSAGES } = constants;

const url = 'https://api-rmw.herokuapp.com/api/v1/auth/logout';


export default () => dispatch => window.fetch(url, {
  method: 'POST',
  credentials: 'include'
}).then(res => res.json()).then((res) => {
  console.log('hey 2');
  if (res.status === 'fail') {
    // send error message
    dispatch(commonAction(UPDATE_MESSAGES, {
      messages: [res.message], isSuccess: false
    }));
    // clear messages
    return setTimeout(() => {
      dispatch(commonAction(UPDATE_MESSAGES, {
        messages: [], isSuccess: false
      }));
    }, 4000);
  }
  dispatch(commonAction(UPDATE_MESSAGES, {
    messages: [res.message], isSuccess: true
  }));
  dispatch(commonAction(LOGIN_STATUS, false));
  return window.location.replace('https://rmw-react.herokuapp.com/login');
});
