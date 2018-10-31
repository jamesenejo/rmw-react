const initialState = { messages: [], isSuccess: true };

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_MESSAGES':
    console.log(action.payload);
    return action.payload;
    break;
  default:
    return state;
  }
};

export default messagesReducer;
