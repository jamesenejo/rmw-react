const isLoadingReducer = (state = false, action) => (
  action.type === 'LOADING_STATUS' ? action.payload : state
);

export default isLoadingReducer;
