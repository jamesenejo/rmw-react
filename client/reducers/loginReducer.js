const loginReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SUCCESS':
    return Object.assign({}, state, action.user);
    break;
  default:
    return state;
  }
};

export default loginReducer;
