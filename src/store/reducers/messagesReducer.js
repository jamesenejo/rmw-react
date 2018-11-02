const initialState = { messages: [], isSuccess: false };

const messagesReducer = (state = initialState, action) => (
  action.type === 'UPDATE_MESSAGES' ? action.payload : state
);

export default messagesReducer;
