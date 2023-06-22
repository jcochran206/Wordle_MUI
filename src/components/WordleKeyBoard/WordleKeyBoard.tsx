import React, {useState} from 'react'

const WordleKeyBoard: React.FC = (): JSX.Element => {
    const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <div className='keyboardBase'>
        {alphabet.map((letter: string, i: number): JSX.Element => (
            <div className='key' id={letter} key={i}>
                {letter}
            </div>
        ))}
    </div>
  )
}

export default WordleKeyBoard