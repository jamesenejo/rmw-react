import constants from '../constants';
import action from '../action';

const {
  LOADING_STATUS
} = constants;


export default bool => dispatch => dispatch(action(LOADING_STATUS, bool));
