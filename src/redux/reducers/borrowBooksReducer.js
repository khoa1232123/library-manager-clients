import {
  LOADING_BORROWBOOK,
  SET_BORROWBOOKS,
  CREATE_BORROWBOOK,
  CLOSE_FORM,
  SET_BORROWBOOK,
  EDIT_BORROWBOOK,
  SEARCH_BORROWBOOKS,
} from "../types";

const initialState = {
  borrowBooks: [],
  borrowBook: {},
  loading: false,
  open: false,
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case LOADING_BORROWBOOK:
      return {
        ...state,
        loading: true,
      };
    case SET_BORROWBOOKS:
      return {
        ...state,
        borrowBooks: actions.payload,
        loading: false,
      };
    case SET_BORROWBOOK:
      return {
        ...state,
        borrowBook: actions.payload,
        loading: false,
      };
    case CREATE_BORROWBOOK:
      return {
        ...state,
        open: true,
        loading: false,
      };
    case EDIT_BORROWBOOK:
      return {
        ...state,
        open: true,
        loading: false,
      };
    case SEARCH_BORROWBOOKS:
      return {
        ...state,
        borrowBooks: actions.payload,
        loading: false
      };
    case CLOSE_FORM:
      return {
        ...state,
        open: false,
        loading: false,
        borrowBook: [],
      };
    default:
      return {
        ...state,
      };
  }
}
