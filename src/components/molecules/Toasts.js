import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySucces  = (title) => {
       
    toast.success(title , {
      position: "bottom-right",
      autoClose: 900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  
}