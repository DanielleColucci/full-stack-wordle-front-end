import styles from './GameBoard.module.css'
import { useState, useEffect } from "react"
import * as wordlist from '../../data/wordlist'
import Board from "../../components/Board/Board"

const GameBoard = ({ wordCount }) => {
  const [guessLimit, setGuessLimit] = useState()
  const [secretWords, setSecretWords] = useState([])
  const [guesses, setGuesses] = useState([])
  const [currentGuess, setCurrentGuess] = useState('')
  const [charCount, setCharCount] = useState(0)
  const [paddedGuess, setPaddedGuess] = useState('     ')

  useEffect(() => {
    setGuessLimit(wordCount + 5)
    setSecretWords(wordlist.getWord(wordCount))
    setGuesses([])
    setCurrentGuess('')
    setPaddedGuess('     ')
  }, [wordCount])
  
  const titles = {
    1: 'Wordle',
    2: 'Dordle',
    4: 'Quordle',
    8: 'Octordle',
    16: 'Sedecordle'
  }
  
  useEffect(() => {
    const handleInput = (e) => {
      const key = e.key.toLowerCase()
      if (key.length === 1 && key >= 'a' && key <= 'z' && charCount < 5) {
        setCurrentGuess(currentGuess + key)
        setPaddedGuess(currentGuess.padEnd(5, ' '))
        setCharCount(charCount + 1)
      } else if (key === 'backspace' && charCount >= 0) {
        setCurrentGuess(currentGuess.slice(0, -1))
        setPaddedGuess(currentGuess.padEnd(5, ' '))
        setCharCount(charCount - 1)
      }
    }
    window.addEventListener('keydown', handleInput)
    return () => {
      window.removeEventListener('keydown', handleInput)
    }
  }, [currentGuess, charCount])

  return (
    <>
      <h1>{titles[wordCount]}</h1>
      <p>Try to guess {wordCount} words in {guessLimit} guesses!</p>
      <div className={styles.gameBoard}>
        {secretWords.map((word, idx) => (
          <Board 
            key={idx} 
            word={word} 
            guessLimit={guessLimit}
            guesses={guesses}
            // handleInput={handleInput}
            paddedGuess={paddedGuess}
            currentGuess={currentGuess}
          />
        ))}
      </div>
    </>
  )
}

export default GameBoard