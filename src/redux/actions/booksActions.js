import {
  LOADING_BOOK,
  SET_BOOKS,
  SET_BOOK,
  CREATE_BOOK,
  CLOSE_FORM,
  EDIT_BOOK,
  SEARCH_BOOKS
} from "../types";

import axios from "axios";

export const getBooks = () => (dispatch) => {
  dispatch({ type: LOADING_BOOK });
  axios
    .get("books")
    .then((res) => {
      dispatch({
        type: SET_BOOKS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_BOOKS,
        payload: [],
      });
    });
};

export const getBook = (bookId) => (dispatch) => {
  dispatch({ type: LOADING_BOOK });
  axios
    .get(`books/${bookId}`)
    .then((res) => {
      dispatch({
        type: SET_BOOK,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_BOOK,
        payload: [],
      });
    });
};

export const createBook = () => (dispatch) => {
  dispatch({ type: LOADING_BOOK });
  dispatch({ type: CREATE_BOOK });
};

export const editBook = (bookId) => (dispatch) => {
  dispatch({ type: LOADING_BOOK });
  dispatch({ type: EDIT_BOOK });
  dispatch(getBook(bookId));
};

export const submitBook = (data) => (dispatch) => {
  dispatch({ type: LOADING_BOOK });
  if (data.bookId) {
    axios
      .post(`/books/${data.bookId}`, data)
      .then((res) => {
        dispatch(getBooks());
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
      .post("/books", data)
      .then((res) => {
        dispatch(getBooks());
        dispatch({ type: CLOSE_FORM });
      })
      .catch((err) => {
        dispatch({ type: CLOSE_FORM });
      });
  }
};

export const deleteBook = bookId => dispatch => {
  dispatch({ type: LOADING_BOOK });
  axios
    .delete(`/books/${bookId}`)
    .then(res => {
      dispatch(getBooks());
      dispatch({
        type: SET_BOOK,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("no");
      dispatch({
        type: SET_BOOK,
        payload: []
      });
    });
};

export const searchBooks = text => dispatch => {
  dispatch({ type: LOADING_BOOK });
  axios
    .get("books")
    .then((res) => {
      var data = res.data.filter(book => book.name.toUpperCase().indexOf(text.toUpperCase()) > -1 );
      console.log(data);
      dispatch({
        type: SEARCH_BOOKS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SEARCH_BOOKS,
        payload: [],
      });
    });
}

export const closeForm = () => (dispatch) => {
  dispatch({ type: CLOSE_FORM });
};
