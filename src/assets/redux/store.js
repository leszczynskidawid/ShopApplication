import {createStore, applyMiddleware} from 'redux'; 
import { reducerBooks } from './reducers';
import { reducerBasketCart } from './reduxCartBasket/ReducerCartBasket';
import {combineReducers} from 'redux'; 

import thunk from 'redux-thunk'
import { userReducer } from './reduxFirebase/firebaseReducer';

const rootReducer = combineReducers({
    reducerBooks, reducerBasketCart, 
    user:userReducer, 
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store; 