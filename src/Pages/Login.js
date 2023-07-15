import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit  (e) {
        e.preventDefault()
        try {
            await axios.post('http://localhost:9000/login', { email, password })
        }
        catch {
            console.log(e)
        }
        
        console.log('email : ', email)
        console.log('password : ', password)
    }


    return (
        <div>
            <h1>Login</h1>
            <form action='POST'>
                <input type='email' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />

                <br />

                <input type='password' placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)} />
                <br />

                <input type='submit' onClick={submit} />
                <br />
            </form>


            <Link to='/signup'>
                Sign Up Here!
            </Link>

        </div>
    )
}

export default Login
