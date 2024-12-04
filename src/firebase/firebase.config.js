// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2sDwOR-pek5Rc8FtAXf34AX-B8Y7dSv0",
  authDomain: "b10-a10-auth-ce68e.firebaseapp.com",
  projectId: "b10-a10-auth-ce68e",
  storageBucket: "b10-a10-auth-ce68e.firebasestorage.app",
  messagingSenderId: "673139650202",
  appId: "1:673139650202:web:50acbf2e6e17f49d5ff923"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);