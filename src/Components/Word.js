import React from 'react'
import './css/word.css'

export default function Word({ wordUsed, usedLetter}) {
    return (
        <div className='test'>
            {
                wordUsed.split('').map((letter, key) => {
                        let status = true
                        if(usedLetter.indexOf(letter) === -1)
                            status = false
                        return (
                            <span key={key} className={'wordHidden'}> {status === true ? letter : '-'} </span>
                        )
                    }
                )
            }
        </div>
    )
}
