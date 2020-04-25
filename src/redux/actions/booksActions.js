import {
  LOADING_BOOK,
  SET_BOOKS,
} from "../types";

import axios from "axios";

export const getBooks = () => dispatch => {
  dispatch({ type: LOADING_BOOK });
  console.log('abc');
  axios
    .get("books")
    .then(res => {
      dispatch({
        type: SET_BOOKS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log('ddd');
      dispatch({
        type: SET_BOOKS,
        payload: []
      });
    });
};
