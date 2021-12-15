import React from 'react'
import { useState } from 'react';
import './css/login.css'


export default function Login() {
    const [username, setUsername] = useState('');

      const getUser = async () => {
        const dataUser  = await fetch(`https://animalfinderapi.herokuapp.com/user/${username}`)
        return await dataUser.json();
      };

    function onChange(e) {
        setUsername(e.target.value)
    }
    
    const pressEnregistrer = async () => {
        const users = await getUser();
        console.log(users)

        if (users.data) {
            if(window.confirm("L'utilisateur existe déjà, veux-tu continuer ?"))
                localStorage.setItem('username', username);
        } else  
            localStorage.setItem('username', username);
        
        refreshPage()
    }

    function refreshPage(){ 
        window.location.reload(); 
    }

    console.log(username);
    return (
        <div className='centerLogin'>
            <input placeholder='Choisis ton pseudo !' value={username} onChange={onChange} ></input>
            <button onClick={pressEnregistrer}> S'enregistrer </button>
        </div>
    )
}
