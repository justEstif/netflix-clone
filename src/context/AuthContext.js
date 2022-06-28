import { useContext, useEffect, createContext, useState } from "react";
import { auth, db } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { setDoc, doc } from "firebase/firestore";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  };

  const logOut = () => signOut(auth);
  const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });
    return () => unsubscribe();
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const UserAuth = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, UserAuth };
