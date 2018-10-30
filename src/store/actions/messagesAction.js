import constants from '../constants';
import commonAction from './commonAction';

const {
  UPDATE_MESSAGES
} = constants;


export default arrayOfMessages => dispatch => dispatch(
  commonAction(UPDATE_MESSAGES, arrayOfMessages)
);
