import {
  FETCH_BOOKS_SUCCESS,
  LOADING_FETCH_BOOKS,
  FETCH_BOOKS_FAILURE,
} from "./actions";
const defaultStore = {
  isloadingData: false,
  books: [],
  errorMsg: "",
};

export const reducerBooks = (state = defaultStore, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isloadingData: false,
        books: action.books,
      };
    case LOADING_FETCH_BOOKS:
      return {
        ...state,
        isloadingData: true,
      };
    case FETCH_BOOKS_FAILURE:
      return {
        // isloadingData:true,
      };

    default: {
      return state;
    }
  }
};
