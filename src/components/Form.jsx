import React, { useState } from 'react';

const Form = () => {
  const [data, setData] = useState({
    name: "",  
    language: "",
  })
 
  const handleChange = event => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Thanks, ${data.name}! I'll speak to you in ${data.language} and you'll pay in ${data.currency}.`)
    setData({ name: "",  language: ""})
  }

  return(
    <>
    <h3>My Form</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">First name</label>
        <br />
        <input type="text" name="name" value={data.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="language">Preferred language</label>
        <br />
        <input type="text" name="language" value={data.language} onChange={handleChange} />
      </div>
    
      <button>Submit</button>
    </form>
  </>

  )
}

export default Form