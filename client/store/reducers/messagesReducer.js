const messagesReducer = (state = [], action) => {
  switch (action.type) {
  case 'UPDATE_MESSAGES':
    return action.payload;
    break;
  default:
    return state;
  }
};

export default messagesReducer;
