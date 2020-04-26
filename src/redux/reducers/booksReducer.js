import {
  LOADING_BOOK,
  SET_BOOKS,
  CREATE_BOOK,
  CLOSE_FORM,
  SET_BOOK,
  EDIT_BOOK,
} from "../types";

const initialState = {
  books: [],
  book: {},
  loading: false,
  open: false,
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case LOADING_BOOK:
      return {
        ...state,
        loading: true,
      };
    case SET_BOOKS:
      return {
        ...state,
        books: actions.payload,
        loading: false,
      };
    case SET_BOOK:
      return {
        ...state,
        book: actions.payload,
        loading: false,
      };
    case CREATE_BOOK:
      return {
        ...state,
        open: true,
        loading: false,
      };
    case EDIT_BOOK:
      return {
        ...state,
        open: true,
        loading: false,
      };
    case CLOSE_FORM:
      return {
        ...state,
        open: false,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
}
