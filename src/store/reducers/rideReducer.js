const rideReducer = (state = {}, action) => (
  action.type === 'FETCH_A_RIDE' ? action.payload : state
);


export default rideReducer;
