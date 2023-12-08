// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , RecaptchaVerifier} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABQH6YNeD_j8ArreOW95THL2v9J_6Iyn8",
  authDomain: "login-page-86a60.firebaseapp.com",
  projectId: "login-page-86a60",
  storageBucket: "login-page-86a60.appspot.com",
  messagingSenderId: "366878803448",
  appId: "1:366878803448:web:fca01b069612697f49820d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth();


export default app;