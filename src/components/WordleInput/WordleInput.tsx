import React, {useState} from 'react';

interface Props {
    index: number;
    setGuesses: (guesses: string[]) => void;
    guesses: string[];
}

const WordleInput: React.FC<Props> = ({index}: Props): JSX.Element => {
    //state management 
    const [currentGuess, setCurrentGuess] = useState<string[]>([...Array(5)]);
    //events handlers 
    const autoTab = (inputIndex: number, guessIndex: number):void => {
        document.getElementById(`${inputIndex}${guessIndex}`)?.focus()
    }
    //handle keyup from keyboard function 
    const handleKeyUp = (e: React.KeyboardEvent, i: number): void => {
        let isCurrentGuessFull: boolean = currentGuess.filter((letter: string): string => letter && letter).length === 5 ? true : false;
        if(e.key === "BackSpace"){
            let inputToGoToIndex: number = i - 1 >=0 ? i-1 : i
            autoTab(inputToGoToIndex, index)
        }else if(i === 4 && e.key === "Enter" && isCurrentGuessFull){
            handleSubmit();
            autoTab(0, index +1)
        }else {
            let inputToGoToIndex: number = i + 1
            autoTab(inputToGoToIndex, index)
        }
    }

    //handle submission 
    const handleSubmit = (): void => {

    }
  return (
    <div>
       {currentGuess.map((letter: string, i: number): JSX.Element => (
        <input key={i} 
        type='text' 
        id={`${i}${index}`} 
        value={currentGuess[i]} 
        onChange={({target: {value}}:React.ChangeEvent<HTMLInputElement>): void => {
            let newCurrentGuess: string[] = currentGuess
            newCurrentGuess[i] = value
            setCurrentGuess(newCurrentGuess)
        }}
        onKeyUp={(e: React.KeyboardEvent) => handleKeyUp(e, i )}
        maxLength={1} 
        minLength={1} 
        required>
        </input>
       ))}
    </div>
  )
}

export default WordleInput