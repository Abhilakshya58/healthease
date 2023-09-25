import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCat0d1G8HbNZJVM1HZAe8MUWNIKNjOx14",
  authDomain: "discord-clone-c3add.firebaseapp.com",
  projectId: "discord-clone-c3add",
  storageBucket: "discord-clone-c3add.appspot.com",
  messagingSenderId: "1010497246526",
  appId: "1:1010497246526:web:2bf97a1c9d90f58f6bc86f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};