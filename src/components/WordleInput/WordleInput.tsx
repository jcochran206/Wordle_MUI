import React, {useState} from 'react';

interface Props {
    index: number;
}

const WordleInput: React.FC<Props> = ({index}: Props): JSX.Element => {
    //state management 
    const [currentGuess, setCurrentGuess] = useState<string[]>([...Array(5)]);
    //events handlers 
    const autoTab = (inputIndex: number, guessIndex: number):void => {
        document.getElementById(`${inputIndex}${guessIndex}`)?.focus()
    }
    const handleKeyUp = (e: React.KeyboardEvent, i: number): void => {
        if(e.key === "BackSpace"){
            let inputToGoToIndex: number = i - 1 >=0 ? i-1 : i
            autoTab(inputToGoToIndex, index)
        }else if(i === 4 && e.key === "Enter"){
            autoTab(0, index +1)
        }else {
            let inputToGoToIndex: number = i + 1
            autoTab(inputToGoToIndex, index)
        }
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