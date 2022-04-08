import {createStore, applyMiddleware} from 'redux'; 
import { reducerBooks } from './reducers';
import thunk from 'redux-thunk'


const store = createStore(reducerBooks, applyMiddleware(thunk))


export default store; 