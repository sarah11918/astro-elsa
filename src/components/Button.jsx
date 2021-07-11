import React, {useState} from 'react';



const Button = ({ children }) => {
  const [status, setStatus] = useState(true)
  return (
    <>
      <h2>Toggle Button</h2>
      <button onClick={() => setStatus(!status)}>Press to Toggle</button>
      
      {' '}{status ? "True" : "False"}
     
    </>
  )
}

export default Button;