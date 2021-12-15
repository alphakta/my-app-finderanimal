import React, { useState } from 'react'
import Word from './Word';

export default function Play(props) {

    const [word] = useState(props.word.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
    const [usedLetter, setTabLetter] = useState([word.charAt(0)])
    const [score, setScore] = useState(10)

    // const [classment, setClassment] = useState(props.classment)
    let wordsHidden = document.getElementsByClassName("wordHidden")
    let wordTab = []
    for(let i=0; i<word.length; i++)
        wordTab.push(word.charAt(i))
        
    function verifWin() {
        let bool = true
    
        for (let i = 0; i < wordsHidden.length; i++) {
            let letter = wordsHidden[i].textContent
            if(letter.includes('-')){
                bool=false
                break;
            }
        }

        if(bool)
            return true
        else
            return false
    }
    function handleLetterPress(e) {
        setTabLetter(usedLetter.concat(e.key))
        if(!wordTab.includes(e.key))
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
            <p> Vous avez {score} essai(s) for find the word. </p>
            <p> Voici les lettes essayer : {usedLetter + ','}</p>
            <p> Write your letters</p>
            <input type="text" onKeyPress={handleLetterPress} />
        </div>
    )
}
