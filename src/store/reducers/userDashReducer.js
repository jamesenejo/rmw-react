const userDashReducer = (state = {}, action) => (
  action.type === 'UPDATE_DASHBOARD' ? action.payload : state
);

export default userDashReducer;
