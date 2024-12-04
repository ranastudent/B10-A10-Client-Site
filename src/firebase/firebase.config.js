// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0VqT8XQtf5LIa7zYViqsM6E7hTNglrPc",
  authDomain: "b10-a10-auth-ebf86.firebaseapp.com",
  projectId: "b10-a10-auth-ebf86",
  storageBucket: "b10-a10-auth-ebf86.firebasestorage.app",
  messagingSenderId: "48428245992",
  appId: "1:48428245992:web:125efa8d1c470d797e3a5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);