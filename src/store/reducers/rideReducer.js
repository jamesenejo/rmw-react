const ridesReducer = (state = {}, action) => {
  switch (action.type) {
  case 'FETCH_A_RIDE':
    return action.payload;
    break;
  default:
    return state;
  }
};

export default ridesReducer;
