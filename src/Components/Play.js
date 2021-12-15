import React, { useState } from 'react'
import Word from './Word';

export default function Play(props) {

    const [word] = useState(props.word.toLowerCase())
    const [usedLetter, setTabLetter] = useState([word.charAt(0)])
    const [score, setScore] = useState(10)

    function verifWin() {
        let wordsHidden = document.getElementsByClassName("wordHidden")
        let count = wordsHidden.length
        for (let i = 0; i < wordsHidden.length; i++) {
            let letterR = wordsHidden[i].textContent

            if (letterR.includes('-'))
                 count--

        }
        console.log(count)

        if(count === wordsHidden.length-1 ||count >= wordsHidden.length-1)
            return true
        else
            return false
    }
    function handleLetterPress(e) {
        setTabLetter(usedLetter.concat(e.key))
        setScore(score - 1)
    }

    if (word === undefined)
        return <p>waiting</p>

    if (score === 0) {
        return (
            <div>
                <Word wordUsed={word} usedLetter={usedLetter} />
                <p> Write your letters</p>
                <p> The test number has been used, it's lose !</p>
            </div>
        )
    }

    if(verifWin())
        return (
            <div>
            <Word wordUsed={word} usedLetter={usedLetter} />
            <p> Write your letters</p>
            <p> It's win !</p>
        </div>
        )

    return (
        <div>
            <Word wordUsed={word} usedLetter={usedLetter} />
            <p> Vous avez {score} essai(s) </p>
            <p> Voici les lettes essayer : {usedLetter + ','}</p>
            <p> Write your letters</p>
            <input type="text" onKeyPress={handleLetterPress} />
        </div>
    )
}
