import React from 'react'
import './css/card.css'

export default function Card(props) {
    return (
        <div className='cardScore'>
            <img alt="" src={props.avatar}></img>
            <p>User : {props.username}</p>
            <p>{props.score} points</p>
        </div>
    )
}
