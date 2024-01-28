import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import ageReducer from './reducers';

const store = createStore(ageReducer, applyMiddleware(thunk));

export default store;