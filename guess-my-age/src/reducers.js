// reducer.js
import {
    FETCH_AGE_REQUEST,
    FETCH_AGE_SUCCESS,
    FETCH_AGE_FAILURE,
  } from './actions';
  
  const initialState = {
    age: null,
    loading: false,
    error: null,
  };
  
  const ageReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_AGE_REQUEST:
        return { ...state, loading: true, error: null };
  
      case FETCH_AGE_SUCCESS:
        console.log('Reducer - Age from API:', action.payload);
        return { ...state, loading: false, age: action.payload };
  
      case FETCH_AGE_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default ageReducer;
  