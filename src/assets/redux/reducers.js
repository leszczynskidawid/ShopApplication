import { getRandomIntInclusive } from "helpers/RandomNumberPrice";
import {
  SUCCESS_FETCH_DATA,
  LOADING_FETCH_BOOKS,
  FAILURE_FETCH_DATA,
} from "./actions";
const defaultStore = {
  isLoadingData: false,
  books: [],
  errorMsg: "",

};

export const reducerBooks = (state = defaultStore, action) => {
  switch (action.type) {
    case SUCCESS_FETCH_DATA:
 

    

 
   

   

    
      return {
        ...state,
        books:action.books ,
        isLoadingData: false,
      };
    case LOADING_FETCH_BOOKS:
       
  
      return {
        ...state,
        isLoadingData: true,
      };
    case FAILURE_FETCH_DATA:
      return {
        errorMsg: "",
        ...state,
      
      };

    default: {
      return state;
    }
  }
};
