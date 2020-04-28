import {
  LOADING_BORROWER,
  SET_BORROWERS,
  SET_BORROWER,
  CREATE_BORROWER,
  CLOSE_FORM,
  EDIT_BORROWER,
  SEARCH_BORROWERS,
} from "../types";

import axios from "axios";

export const getBorrowers = () => (dispatch) => {
  dispatch({ type: LOADING_BORROWER });
  axios
    .get("borrowers")
    .then((res) => {
      dispatch({
        type: SET_BORROWERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_BORROWERS,
        payload: [],
      });
    });
};

export const getBorrower = (borrowerId) => (dispatch) => {
  dispatch({ type: LOADING_BORROWER });
  axios
    .get(`borrowers/${borrowerId}`)
    .then((res) => {
      dispatch({
        type: SET_BORROWER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_BORROWER,
        payload: [],
      });
    });
};

export const createBorrower = () => (dispatch) => {
  dispatch({ type: LOADING_BORROWER });
  dispatch({ type: CREATE_BORROWER });
};

export const editBorrower = (borrowerId) => (dispatch) => {
  dispatch({ type: LOADING_BORROWER });
  dispatch({ type: EDIT_BORROWER });
  dispatch(getBorrower(borrowerId));
};

export const submitBorrower = (data) => (dispatch) => {
  dispatch({ type: LOADING_BORROWER });
  if (data.borrowerId) {
    axios
      .post(`/borrowers/${data.borrowerId}`, data)
      .then((res) => {
        dispatch(getBorrowers());
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
      .post("/borrowers", data)
      .then((res) => {
        dispatch(getBorrowers());
        dispatch({ type: CLOSE_FORM });
      })
      .catch((err) => {
        dispatch({ type: CLOSE_FORM });
      });
  }
};

export const deleteBorrower = (borrowerId) => (dispatch) => {
  dispatch({ type: LOADING_BORROWER });
  axios
    .delete(`/borrowers/${borrowerId}`)
    .then((res) => {
      dispatch(getBorrowers());
      dispatch({
        type: SET_BORROWER,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("no");
      dispatch({
        type: SET_BORROWER,
        payload: [],
      });
    });
};

export const searchBorrowers = (text) => (dispatch) => {
  dispatch({ type: LOADING_BORROWER });
  axios
    .get("borrowers")
    .then((res) => {
      var data = res.data.filter(
        (borrower) =>
          borrower.name.toUpperCase().indexOf(text.toUpperCase()) > -1
      );
      console.log(data);
      dispatch({
        type: SEARCH_BORROWERS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SEARCH_BORROWERS,
        payload: [],
      });
    });
};

export const closeForm = () => (dispatch) => {
  dispatch({ type: CLOSE_FORM });
};
