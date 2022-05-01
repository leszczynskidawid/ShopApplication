import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBXh9JO_g-4up9yGQCetI_v6hNtKvX5mOQ",
  authDomain: "rawstudiodatabase.firebaseapp.com",
  projectId: "rawstudiodatabase",
  storageBucket: "rawstudiodatabase.appspot.com",
  messagingSenderId: "598092309038",
  appId: "1:598092309038:web:c3bd2390fd04134b5db5bf",
  measurementId: "G-LLQQBHM8L4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 







