import constants from '../constants';
import action from '../action';

const { UPDATE_MESSAGES } = constants;
const url = `https://api-rmw.herokuapp.com/api/v1/users/profile/upload`;

export default (userData, history) => (dispatch) => window.fetch(url, {
  method: 'PUT',
  body: userData,
  credentials: 'include'
})
  .then(res => res.json())
  .then((res) => {
    if (res.status === 'success') {
      // display success message
      dispatch(action(UPDATE_MESSAGES, {
        messages: [res.message], isSuccess: true
      }));
      // turn off spinner
      history.push('/profile');
      // clear messages
      return setTimeout(() => {
        dispatch(action(UPDATE_MESSAGES, {
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
