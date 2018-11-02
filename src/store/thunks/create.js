import constants from '../constants';
import action from '../action';

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
    }
    // send success message
    dispatch(action(UPDATE_MESSAGES, {
      messages: [res.message], isSuccess: true
    }));
    // turn off spinner
    dispatch(action(LOADING_STATUS, false));
    history.push('/dashboard');
    // clear messages
    return setTimeout(() => {
      dispatch(action(UPDATE_MESSAGES, {
        messages: [res.message], isSuccess: false
      }));
    }, 4000);
  })
  .catch(() => {
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
