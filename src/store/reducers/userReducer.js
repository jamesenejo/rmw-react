const userReducer = (state = {}, action) => (
  action.type === 'SET_CURRENT_USER' ? action.payload : state
);

export default userReducer;
