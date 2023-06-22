import React, { useState, useEffect } from 'react';
import WordleKeyBoard from '../WordleKeyBoard/WordleKeyBoard';
import WordleInput from '../WordleInput/WordleInput';


const WordleBoard: React.FC = (): JSX.Element => {
    const [guesses, setGuesses] = useState<string[]>([...Array(6)]);
    const [solution, setSolution] = useState<string>("");
    //fetch data from api
    
  return (
    <div>
        {guesses.map((guess: string, i: number): JSX.Element => (
            <WordleInput index={i} key={i} setGuesses={setGuesses} guesses={guesses}/>
        ))}
        <WordleKeyBoard />
    </div>
  )
}

export default WordleBoard