import React, {useState, useContext} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import {AuthContext} from '../components/Auth.js';

const RegisterForm = () => {
  const [data, setData] = useState({
    email: "", 
    password:"", 
    error:null
  })

  const { setCurrentUser } = useContext(AuthContext)
  const handleChange = event => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setData({...data, [event.target.name]: event.target.value})
    try {
      const result = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      setCurrentUser(result)
    } catch(error) {
      setData({...setData, error: error.message})
    }
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label><br />
        <input type="text" name="email" value={data.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Password</label><br />
        <input type="text" name="password" value={data.password} onChange={handleChange} />
      </div>
      {data.error ? <p>{data.error}</p> : null}
      <input type="submit" value="register" />
    </form>
    </>
  )
}

export default RegisterForm