import React, { useContext } from "react";
import { AuthContext } from "../components/Auth.js";
import LoginForm from "../components/LogInForm.js";
import RegisterForm from "../components/RegisterForm.js";
import firebase from "firebase/app";
import "firebase/auth";

const Home = () => {
  const { currentUser} = useContext(AuthContext);
  const handleLogout = async () => {
    await firebase.auth().signOut()
  }

  return (
    <>
      <h1>Home</h1>
      {currentUser ? (<>
        <p>{currentUser.email} is logged in</p>
        <button onClick={handleLogout}>Log Out</button>
      </>) : (<>
        <p>You are {`${currentUser}`} logged in</p>
        <LoginForm />
        <p> or you can...</p>
        <RegisterForm />
      </>)}
    </>
  );
};

export default Home;