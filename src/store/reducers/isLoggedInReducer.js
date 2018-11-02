const isLoggedInReducer = (state = false, action) => (
  action.type === 'LOGIN_STATUS' ? action.payload : state
);

export default isLoggedInReducer;
