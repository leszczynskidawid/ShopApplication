import { getRandomIntInclusive } from "helpers/RandomNumberPrice";

export const SUCCESS_FETCH_DATA = "SUCCESS_FETCH_DATA";
export const FAILURE_FETCH_DATA = "FAILURE_FETCH_DATA";
export const LOADING_FETCH_BOOKS = "LOADING_FETCH_BOOKS";

export const ApConnect = {
  KEY: "X6TyMgzQpaZ1zGD7CXMGwdOa6tGhv8PY",
  SECRET: "GIfpmTr97g5fkYQb",
  APP_ID: "a2ea9eb4-3559-486c-87e7-a33a36be1d63",
  BASE_URL: "https://gutendex.com/books/",
};

const fetchBooks = (books)=> {

  return {
    type: SUCCESS_FETCH_DATA,
      books
  
    
  };
};

const loadingDataBooks = () => {
  return {
    type: LOADING_FETCH_BOOKS,
  };
};
const errorMsgFetchBooks = error => {
  return {
    type: FAILURE_FETCH_DATA,
    error,
  };
};
  


export const getDataBooks = async dispatch => {

  try
  {
    dispatch(loadingDataBooks());
    const response = await fetch(`${ApConnect.BASE_URL}`);
    const json = await response.json();
    // dispatch(fetchBooks(json.results));
    
const array = []; 
 await  json.results.forEach(d=> {
 const item =   {...d , price:getRandomIntInclusive(2,21)};
 array.push(item)

 
    })   
dispatch(fetchBooks(array))
    
  }
  
  catch
  {
    dispatch(errorMsgFetchBooks(alert("fatal error")))
  }
   

    

 


};
