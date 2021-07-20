import React, { useEffect, useState, createContext } from "react";
import firebase from "firebase/app";
import firebaseConfig from './extensions/config.js'
import "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
    
    // () => {
    // const currentUser = firebase.auth().currentUser;

    // return currentUser;
    // }
  );

  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};