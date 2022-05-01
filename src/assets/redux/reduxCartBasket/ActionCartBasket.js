export const ADD_BOOK_TO_BASKET_CART = "ADD_BOOK_TO_BASKET_CART"; 
export const DELETE_BOOK_TO_BASKET_CART = "DELETE_BOOK_TO_BASKET_CART"; 



export const addBookToBasketCart = (book) => 
{   
    return {
        type: ADD_BOOK_TO_BASKET_CART, 
        book
    }
}
export const deleteBookToBasketCart = (id) => 
{
    
    return {
        type: DELETE_BOOK_TO_BASKET_CART, 
        id
    }
}


    





