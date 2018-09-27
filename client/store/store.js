import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = initialState => createStore(rootReducer, initialState);

export default store;
