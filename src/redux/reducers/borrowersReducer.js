import {
  LOADING_BORROWER,
  SET_BORROWERS,
  CREATE_BORROWER,
  CLOSE_FORM,
  SET_BORROWER,
  EDIT_BORROWER,
  SEARCH_BORROWERS,
} from "../types";

const initialState = {
  borrowers: [],
  borrower: {},
  loading: false,
  open: false,
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case LOADING_BORROWER:
      return {
        ...state,
        loading: true,
      };
    case SET_BORROWERS:
      return {
        ...state,
        borrowers: actions.payload,
        loading: false,
      };
    case SET_BORROWER:
      return {
        ...state,
        borrower: actions.payload,
        loading: false,
      };
    case CREATE_BORROWER:
      return {
        ...state,
        open: true,
        loading: false,
      };
    case EDIT_BORROWER:
      return {
        ...state,
        open: true,
        loading: false,
      };
    case SEARCH_BORROWERS:
      return {
        ...state,
        borrowers: actions.payload,
        loading: false
      };
    case CLOSE_FORM:
      return {
        ...state,
        open: false,
        loading: false,
        borrower: [],
      };
    default:
      return {
        ...state,
      };
  }
}
