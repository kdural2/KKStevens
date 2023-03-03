import React, { useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';

// const sql = require('mssql');

// const config = {
//     user: 'se494',
//     password: '5YBpyqCNCME9fqW', 
//     server: 'ryanf3.database.windows.net', 
//     database: 'se494sql',
//     authentication: {
//         type: 'default'
//     },
//     options: {
//         encrypt: true
//     }
// }

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken}) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });

        if (username == "kdural2" && password == "0505") {
            setToken(token)
        }
        console.log(username)
        //setToken(token)
    }

    
    
    return(
        <div className="login-wrapper">
            <h1>KKSPC Job Entry Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}