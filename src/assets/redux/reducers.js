import { FETCH_BOOKS, LOADING_FETCH_BOOKS, ERROR_FETCH_BOOKS } from "./actions";
const defaultStore = {
  loadingData: false,
  books: [],
  errorMsg: "",
};

export const reducerBooks = (state = defaultStore, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        loadingData: false,
        books: action.books,
        errorMsg: "",
      };
    case LOADING_FETCH_BOOKS:
      return {
        loadingData: true,
        books: [],
        errorMsg: "",
      };
    case ERROR_FETCH_BOOKS:
      return {
        loadingData: false,
        books: [],
        errorMsg: action.error,
      };

    default: {
      return state;
    }
  }
};
