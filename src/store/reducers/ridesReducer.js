const ridesReducer = (state = [], action) => (
  action.type === 'FETCH_ALL_RIDES' ? action.payload : state
);


export default ridesReducer;
