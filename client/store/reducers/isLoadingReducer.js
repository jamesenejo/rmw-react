const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
  case 'LOADING_STATUS':
    return action.payload;
    break;
  default:
    return state;
  }
};

export default isLoadingReducer;
