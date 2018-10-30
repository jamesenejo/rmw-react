import constants from '../constants';
import commonAction from './commonAction';

const { UPDATE_MESSAGES, SET_CURRENT_USER, LOADING_STATUS } = constants;
const url = `http://localhost:7000/api/v1/users/profile/edit`;

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
      dispatch(commonAction(UPDATE_MESSAGES, {
        messages: [res.message], isSuccess: true
      }));
      dispatch(commonAction(SET_CURRENT_USER, res.data));
      // turn off spinner
      dispatch(commonAction(LOADING_STATUS, false));
    }
    // display failure message
    dispatch(commonAction(UPDATE_MESSAGES, {
      messages: [res.message], isSuccess: false
    }));
    // clear messages
    return setTimeout(() => {
      dispatch(commonAction(UPDATE_MESSAGES, {
        messages: [], isSuccess: false
      }));
    }, 4000);
  })
  .catch(() => {
    // display error message
    dispatch(commonAction(UPDATE_MESSAGES, {
      messages: ['An error occurred'], isSuccess: false
    }));

    // clear messages
    return setTimeout(() => {
      dispatch(commonAction(UPDATE_MESSAGES, {
        messages: [], isSuccess: false
      }));
    }, 4000);
  });
