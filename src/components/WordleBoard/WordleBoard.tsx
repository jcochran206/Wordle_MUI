import React, { useState, useEffect } from 'react';
import WordleKeyBoard from '../WordleKeyBoard/WordleKeyBoard';
import WordleInput from '../WordleInput/WordleInput';

const API_URL = 'https://wordle-answers-solutions.p.rapidapi.com/today'

// const options = {
//     method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': process.env.WORDLE_API_KEY,
// 		'X-RapidAPI-Host': process.env.WORDLE_HOST
// }

// interface Props {
//     options: string[];
   
// }

const WordleBoard: React.FC = (): JSX.Element => {
    const [guesses, setGuesses] = useState<string[]>([...Array(6)]);
    const [solution, setSolution] = useState<string>("");
    //fetch data from api
    // useEffect(() => {
    //     const fetchWords = async () => {
    //         const response = await fetch(API_URL, options);
    //         const words = await response.json();
    //         setSolution(words[Math.floor(Math.random() * words.length)].toLowerCase())
    //     };
    //     fetchWords()
    // }, [])
    
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