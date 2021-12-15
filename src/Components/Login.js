import React from 'react'
import { useState, useEffect } from 'react';
import './css/login.css'


export default function Login() {
    const [username, setUsername] = useState('');
  

      function handlePress(e){
        setUsername(e.target.value)
      }
    

      console.log(username);
    return (
        <div className='centerLogin'>
            <input placeholder='Choisis ton pseudo !' value={username} onChange={handlePress} ></input>
            <button > S'enregistrer </button>
        </div>
    )
}
