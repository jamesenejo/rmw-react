const isLoggedInReducer = (state = false, action) => {
  switch (action.type) {
  case 'LOGIN_STATUS':
    return action.payload;
    break;
  default:
    return state;
  }
};

export default isLoggedInReducer;
