export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const LOADING_FETCH_BOOKS = "LOADING_FETCH_BOOKS";

export const ApConnect = {
  KEY: "X6TyMgzQpaZ1zGD7CXMGwdOa6tGhv8PY",
  SECRET: "GIfpmTr97g5fkYQb",
  APP_ID: "a2ea9eb4-3559-486c-87e7-a33a36be1d63",
  BASE_URL: "https://gutendex.com/books/?sort=popular ",
};

const fetchBooks = books => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    books,
  };
};

const loadingDataBooks = () => {
  return {
    type: LOADING_FETCH_BOOKS,
  };
};
const errorMsgFetchBooks = error => {
  return {
    type: FETCH_BOOKS_FAILURE,
    error,
  };
};

export const getDataBooks = async dispatch => {
     dispatch(loadingDataBooks());
    const response = await fetch(`${ApConnect.BASE_URL}`);
    const json = await response.json();
    dispatch(fetchBooks(json.results));

 


};
