const ridesReducer = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_ALL_RIDES':
    return action.payload;
    break;
  default:
    return state;
  }
};

export default ridesReducer;
