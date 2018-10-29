const userDashReducer = (state = {}, action) => {
  switch (action.type) {
  case 'UPDATE_DASHBOARD':
    return action.payload;
    break;
  default:
    return state;
  }
};

export default userDashReducer;
