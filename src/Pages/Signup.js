import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit ()  {
      axios.post('http://localhost:9000/signup', {name, email, password})
      console.log(name, email, password)
  }

  return (
    <div>

        <label>Name: </label>
        <input type='name' 
        onChange={(e) => setName(e.target.value)}/>

        <br/>
        <label>email: </label>
        <input type='email' 
        onChange={(e) => setEmail(e.target.value)}/>

        <br/>
        <label>Password: </label>
        <input type='password' 
        onChange={(e) => setPassword(e.target.value)}/>

        <br/>

        <button type='submit' onClick={handleSubmit}>Submit</button>

        <Link to='/login' >Login </Link>
    </div>

  

  )
}

export default Signup
