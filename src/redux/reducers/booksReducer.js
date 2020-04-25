import {
  LOADING_BOOK,
  SET_BOOKS
} from "../types";

const initialState = {
  books: [],
  book: {},
  loading: false
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case LOADING_BOOK:
      return {
        ...state,
        loading: true
      };
    case SET_BOOKS:
      return {
        ...state,
        books: actions.payload,
        loading: false
      }
    default:
      return {
        ...state
      };
  }
}
