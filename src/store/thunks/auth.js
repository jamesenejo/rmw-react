import constants from '../constants';
import action from '../action';

const {
  LOGIN_STATUS,
  LOADING_STATUS,
  UPDATE_MESSAGES
} = constants;


export default (userData, history, authType) => dispatch => window.fetch(
  `https://api-rmw.herokuapp.com/api/v1/auth/${authType}`,
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
    if (res.status === 'success') {
      dispatch(action(LOGIN_STATUS, true));
      history.push('/dashboard');
    }
    // keep loading status false
    dispatch(action(LOGIN_STATUS, false));
    // send error message
    dispatch(action(UPDATE_MESSAGES, {
      messages: [res.message], isSuccess: false
    }));
    // turn off spinner
    dispatch(action(LOADING_STATUS, false));
    // clear messages
    return setTimeout(() => {
      dispatch(action(UPDATE_MESSAGES, {
        messages: [], isSuccess: false
      }));
    }, 4000);
  })
  .catch(() => {
    dispatch(action(LOGIN_STATUS, false)); // maintain logout status
    dispatch(action(UPDATE_MESSAGES, {
      messages: ['An error occurred'], isSuccess: false
    })); // send error message
    dispatch(action(LOADING_STATUS, false)); // turn off spinner

    // clear messages
    return setTimeout(() => {
      dispatch(action(UPDATE_MESSAGES, {
        messages: [], isSuccess: false
      }));
    }, 4000);
  });
