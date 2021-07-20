import React from 'react';
//import useAuthListener from '../hooks/use-auth-listener';
import UserContext from '../context/user'
import Login from '../components/Login.jsx'


function App() {
    const { user } = useAuthListener();


  return (
    <UserContext.Provider value ={{user}}>
    <Login />
    </UserContext.Provider>
  );
}

export default App;