import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)

      const createUser = (email, password)=>{
            return createUserWithEmailAndPassword(auth, email, password)
      }
      const login = (email, password)=>{
            return signInWithEmailAndPassword(auth, email, password)
      }
      const logout =()=>{
            return signOut(auth)
      }
      const googleLogin=()=>{
            return signInWithPopup(auth, googleProvider)
      }

      const userInfo = {
            user,
            loading,
            createUser,
            login,
            logout,
            googleLogin,
      };
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
              setUser(currentUser);
              setLoading(false);
            });
            return () => {
              unsubscribe();
            };
          }, []);
      return (
            <AuthContext.Provider value={userInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;