import constants from '../constants';
import commonAction from './commonAction';

const {
  LOADING_STATUS
} = constants;


export default data => dispatch => dispatch(commonAction(LOADING_STATUS, data));
