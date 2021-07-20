import React, { useState, useEffect, useContext } from 'react';
//import { useHistory } from 'react-router-dom';
//import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';

export default function Login() {
  //const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //const isInvalid = password === '' || emailAddress === '';

  useEffect(() => {
    document.title = 'Login';
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault();
        
    try {
        await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
        //history.push(ROUTES.PRIVATE_PAGE);
        console.alert("You have logged in!")
      } catch (error) {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      }
    }
  
    return(
      <div>
        <h1>Firebase authenticated app - login</h1>
        {error && <p style={{color:'red'}}>{error}</p>} 
        <form onSubmit={handleLogin} method="POST">
            <input
                        aria-label="Enter your email address"
                        type="text"
                        placeholder="Email address"
                        value = {emailAddress}
                        onChange = {({target}) => setEmailAddress(target.value)}
            />
            <input
                        aria-label="Enter your password"
                        type="password"
                        placeholder="Password"
                        value = {password}
                        onChange = {({target}) => setPassword(target.value)}
            />
            <button type="submit">Log In</button>
          </form>
      </div>
    )
  }