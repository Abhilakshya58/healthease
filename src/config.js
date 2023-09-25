import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBz8Fc5_TFdqZ8Z6pGKcz_WuWdf-xNCf34",
    authDomain: "healthease-1618e.firebaseapp.com",
    projectId: "healthease-1618e",
    storageBucket: "healthease-1618e.appspot.com",
    messagingSenderId: "707362370541",
    appId: "1:707362370541:web:0fb196343bd97c61eb6de4"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};