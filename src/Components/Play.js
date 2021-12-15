import React, { useState } from 'react'
import Word from './Word';

export default function Play(props) {

    const [word, setWord] = useState(props.word)
    const [usedLetter, setTabLetter] = useState(word.charAt(0))

    // const [score] = useState(0)

    console.log(word)

    // setWord(word + '1')

    // setTabLetter(usedLetter = [].push(word.charAt(0)))

	// function handleLetterPress(e){
    //     setTabLetter(usedLetter.push(e.key))
    // }


    // console.log(state)
    if(word == undefined)
        return <p>waiting</p>

    return (
        <div>
            <Word wordUsed={word} usedLetter={usedLetter}/>
            <p> Write your letters</p>
			{/* <input type="text"  onKeyPress={handleLetterPress}/> */}
        </div>
    )
}
