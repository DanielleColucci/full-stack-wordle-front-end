import styles from './GameBoard.module.css'
import { useState, useEffect } from "react"
import * as wordlist from '../../data/wordlist'
import * as utilities from '../../utilities/utilities'
import Board from "../../components/Board/Board"

const GameBoard = ({ wordCount }) => {
  const [guessLimit, setGuessLimit] = useState()
  const [secretWords, setSecretWords] = useState([])
  const [guesses, setGuesses] = useState([])
  const [currentGuess, setCurrentGuess] = useState('')
  const [charCount, setCharCount] = useState(0)
  const [winner, setWinner] = useState(false)
  const [loss, setLoss] = useState(false)

  useEffect(() => {
    setGuessLimit(wordCount + 5)
    setSecretWords(wordlist.getWord(wordCount))
    setGuesses([])
    setCurrentGuess('')
    setWinner(false)
    setLoss(false)
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
        setCharCount(charCount + 1)
      } else if (key === 'backspace' && charCount > 0) {
        setCurrentGuess(currentGuess.slice(0, -1))
        setCharCount(charCount - 1)
      } else if (key === 'enter' && charCount === 5){
        if (wordlist.checkWord(currentGuess)) {
          setGuesses([...guesses, currentGuess])
        }
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
            currentGuess={currentGuess}
          />
        ))}
      </div>
    </>
  )
}

export default GameBoard