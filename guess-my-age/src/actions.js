// actions.js
import axios from 'axios';

export const FETCH_AGE_REQUEST = 'FETCH_AGE_REQUEST';
export const FETCH_AGE_SUCCESS = 'FETCH_AGE_SUCCESS';
export const FETCH_AGE_FAILURE = 'FETCH_AGE_FAILURE';

export const fetchAge = (name) => {
  return (dispatch) => {
    dispatch({ type: FETCH_AGE_REQUEST });

    axios.get(`https://api.agify.io/?name=${name}`)
      .then((response) => {
        if (response.data.error) {
          dispatch({ type: FETCH_AGE_FAILURE, payload: response.data.error });
        } else {
          console.log('API Response:', response.data);
          dispatch({ type: FETCH_AGE_SUCCESS, payload: response.data });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_AGE_FAILURE, payload: error.message });
      });
  };
};
