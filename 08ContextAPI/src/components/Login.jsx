import React, { useState, useContext } from 'react'
import userContext from '../context/userContext'

function Login() {
    const [UserName, setUserName] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    const handleSubmit = () => {

    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='UserName' />
            <input type="text"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
            <input type="text"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email' />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Login
