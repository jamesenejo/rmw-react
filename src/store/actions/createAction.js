import constants from '../constants';
import commonAction from './commonAction';

const {
  LOADING_STATUS,
  UPDATE_MESSAGES
} = constants;


export default (userData, history, authType) => dispatch => window.fetch(
  `https://api-rmw.herokuapp.com/api/v1/users/rides`,
  {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      "Accept": 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }
)
  .then(res => res.json())
  .then((res) => {
    if (res.status === 'fail') {
      // send error message
      dispatch(commonAction(UPDATE_MESSAGES, {
        messages: [res.message], isSuccess: false
      }));
      // turn off spinner
      dispatch(commonAction(LOADING_STATUS, false));
      // clear messages
      return setTimeout(() => {
        dispatch(commonAction(UPDATE_MESSAGES, {
          messages: [], isSuccess: false
        }));
      }, 4000);
    }
    // send success message
    dispatch(commonAction(UPDATE_MESSAGES, {
      messages: [res.message], isSuccess: true
    }));
    // turn off spinner
    dispatch(commonAction(LOADING_STATUS, false));
    history.push('/dashboard');
    // clear messages
    return setTimeout(() => {
      dispatch(commonAction(UPDATE_MESSAGES, {
        messages: [res.message], isSuccess: false
      }));
    }, 4000);
  })
  .catch(() => {
    dispatch(commonAction(UPDATE_MESSAGES, {
      messages: ['An error occurred'], isSuccess: false
    })); // send error message
    dispatch(commonAction(LOADING_STATUS, false)); // turn off spinner

    // clear messages
    return setTimeout(() => {
      dispatch(commonAction(UPDATE_MESSAGES, {
        messages: [], isSuccess: false
      }));
    }, 4000);
  });
