
import { auth } from "Firebase/firbase_config";



export const REGISTER_START = "REGISTER_START"; 
export const REGISTER_SUCCESS = "REGISTER_SUCCES"; 
export const REGISTER_ERROR = "REGISTER_ERROR";




const registerStart = () => ({
    type:REGISTER_START, 
})
const registersSuccess = (user) => ({
    type:REGISTER_SUCCESS, 
    user, 
})
const registerError = (error) => ({
    type:REGISTER_ERROR,
    error 
})

export const registerInit =  (email, password, dispaName) => {

        return  async function (dispatch)
        {
            dispatch((registerStart())); 
            try {
                const res = await auth.createUserWithEmailAndPassword(email, password);
                const user =  res.user; 
              
                dispatch(registersSuccess(user))
                
            } catch (error) {
                
                dispatch(registerError(error.messages))
            }
        }
    }