import constants from '../constants';
import action from '../action';

const {
  UPDATE_MESSAGES
} = constants;


export default payload => dispatch => dispatch(action(UPDATE_MESSAGES, payload));
