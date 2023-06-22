import React, { useState } from 'react';
import WordleKeyBoard from '../WordleKeyBoard/WordleKeyBoard';
import WordleInput from '../WordleInput/WordleInput';


const WordleBoard: React.FC = (): JSX.Element => {
    const [guesses, setGuesses] = useState<string[]>([...Array(6)])
  return (
    <div>
        {guesses.map((guess: string, i: number): JSX.Element => (
            <WordleInput index={i} key={i}/>
        ))}
        <WordleKeyBoard />
    </div>
  )
}

export default WordleBoard