import { REGISTER_ERROR, REGISTER_START, REGISTER_SUCCESS } from "./firebaseAction"

const initialState = {
    loading:false, 
    currentUser: null, 
    error: null, 

}


export const userReducer = (state = initialState, action)=>
{
    switch(action.type)
    {
        case REGISTER_START:
            return {
                ...state, 
                loading:true, 

            }
        case REGISTER_SUCCESS:
            return {
                ...state, 
                loading:false, 
                currentUser: action.user
            }
        case REGISTER_ERROR:
            return {
                ...state, 
                loading:false, 
                currentUser: action.error,
            }
        default:
            return state;
    }
}