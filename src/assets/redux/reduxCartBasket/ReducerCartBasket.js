import {
  ADD_BOOK_TO_BASKET_CART,
  DELETE_BOOK_TO_BASKET_CART,
} from "./ActionCartBasket";

const defaultCartState = {
  bookToBuy: []
    
  
  
};

export const reducerBasketCart = (state = defaultCartState, action) => {
  switch (action.type) {
    case ADD_BOOK_TO_BASKET_CART:
 
      return {
       
      
   
        ...state, 
        bookToBuy:[...state.bookToBuy ,action.book]
        
      };
    case DELETE_BOOK_TO_BASKET_CART:
      const filter =
        state.bookToBuy.filter(book => book.id !== action.id);

      return {
        ...state,
        bookToBuy: filter
      };

    default: {
      return state;
    }
  }
};
