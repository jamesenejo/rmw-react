import constants from '../constants';
import commonAction from './commonAction';

const url = 'http://localhost:7000/api/v1/users/profile';
const {
  SET_CURRENT_USER
} = constants;


export default (history) => dispatch => window.fetch(url, {
  method: 'GET',
  credentials: 'include'
})
  .then(res => res.json())
  .then(res => {
    console.log(res);
    if (res.status === 'fail') {
      return history.push('/login?rd');
    }
    const { id, completeness, imgUrl } = res.data;
    dispatch(commonAction(SET_CURRENT_USER, { id, completeness, imgUrl }));
  });
