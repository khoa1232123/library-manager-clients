import {
  LOADING_BORROWBOOK,
  SET_BORROWBOOKS,
  SET_BORROWBOOK,
  CREATE_BORROWBOOK,
  CLOSE_FORM,
  EDIT_BORROWBOOK,
  SEARCH_BORROWBOOKS
} from "../types";

import axios from "axios";

export const getBorrowBooks = () => (dispatch) => {
  dispatch({ type: LOADING_BORROWBOOK });
  axios
    .get("borrowBooks")
    .then((res) => {
      dispatch({
        type: SET_BORROWBOOKS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_BORROWBOOKS,
        payload: [],
      });
    });
};

export const getBorrowBook = (borrowBookId) => (dispatch) => {
  dispatch({ type: LOADING_BORROWBOOK });
  axios
    .get(`borrowBooks/${borrowBookId}`)
    .then((res) => {
      dispatch({
        type: SET_BORROWBOOK,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_BORROWBOOK,
        payload: [],
      });
    });
};

export const createBorrowBook = () => (dispatch) => {
  dispatch({ type: LOADING_BORROWBOOK });
  dispatch({ type: CREATE_BORROWBOOK });
};

export const editBorrowBook = (borrowBookId) => (dispatch) => {
  dispatch({ type: LOADING_BORROWBOOK });
  dispatch({ type: EDIT_BORROWBOOK });
  dispatch(getBorrowBook(borrowBookId));
};

export const submitBorrowBook = (data) => (dispatch) => {
  dispatch({ type: LOADING_BORROWBOOK });
  if (data.borrowBookId) {
    axios
      .post(`/borrowBooks/${data.borrowBookId}`, data)
      .then((res) => {
        dispatch(getBorrowBooks());
        dispatch({
          type: CLOSE_FORM,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: CLOSE_FORM,
          payload: [],
        });
      });
  } else {
    axios
      .post("/borrowBooks", data)
      .then((res) => {
        dispatch(getBorrowBooks());
        dispatch({ type: CLOSE_FORM });
      })
      .catch((err) => {
        dispatch({ type: CLOSE_FORM });
      });
  }
};

export const deleteBorrowBook = borrowBookId => dispatch => {
  dispatch({ type: LOADING_BORROWBOOK });
  axios
    .delete(`/borrowBooks/${borrowBookId}`)
    .then(res => {
      dispatch(getBorrowBooks());
      dispatch({
        type: SET_BORROWBOOK,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("no");
      dispatch({
        type: SET_BORROWBOOK,
        payload: []
      });
    });
};

export const searchBorrowBooks = text => dispatch => {
  dispatch({ type: LOADING_BORROWBOOK });
  axios
    .get("borrowBooks")
    .then((res) => {
      var data = res.data.filter(borrowBook => borrowBook.name.toUpperCase().indexOf(text.toUpperCase()) > -1 );
      console.log(data);
      dispatch({
        type: SEARCH_BORROWBOOKS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SEARCH_BORROWBOOKS,
        payload: [],
      });
    });
}

export const closeForm = () => (dispatch) => {
  dispatch({ type: CLOSE_FORM });
};
