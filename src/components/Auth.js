import React, { useEffect, useState, createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(null
    
    // () => {
    // const currentUser = firebase.auth().currentUser;

    // return currentUser;
    // }
  );

  useEffect(() => {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      setCurrentUser(firebaseUser);
      setLoading(false);
    });
  }, [])

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};