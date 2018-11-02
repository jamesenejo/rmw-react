import constants from '../constants';
import action from '../action';

const { UPDATE_MESSAGES, SET_CURRENT_USER, LOADING_STATUS } = constants;
const url = `https://api-rmw.herokuapp.com/api/v1/users/profile/edit`;

export default (userData, history) => (dispatch) => window.fetch(url, {
  method: 'PUT',
  body: JSON.stringify(userData),
  headers: {
    "Accept": 'application/json',
    "Content-Type": 'application/json'
  },
  credentials: 'include'
})
  .then(res => res.json())
  .then((res) => {
    if (res.status === 'success') {
      // display success message
      dispatch(action(UPDATE_MESSAGES, {
        messages: [res.message], isSuccess: true
      }));
      dispatch(action(SET_CURRENT_USER, res.data));
      dispatch(action(LOADING_STATUS, false)); // turn off spinner
      history.push('/profile');

      return setTimeout(() => {
        dispatch(action(UPDATE_MESSAGES, { // clear messages
          messages: [], isSuccess: false
        }));
      }, 4000);
    }
    // display failure message
    dispatch(action(UPDATE_MESSAGES, {
      messages: [res.message], isSuccess: false
    }));
    // clear messages
    return setTimeout(() => {
      dispatch(action(UPDATE_MESSAGES, {
        messages: [], isSuccess: false
      }));
    }, 4000);
  })
  .catch(() => {
    // display error message
    dispatch(action(UPDATE_MESSAGES, {
      messages: ['An error occurred'], isSuccess: false
    }));

    // clear messages
    return setTimeout(() => {
      dispatch(action(UPDATE_MESSAGES, {
        messages: [], isSuccess: false
      }));
    }, 4000);
  });
