import styles from './GameBoard.module.css'
import { useState, useEffect, useCallback } from "react"
import * as wordlist from '../../data/wordlist'
import * as utilities from '../../utilities/utilities'
import * as scoreService from '../../services/scoreService'
import Board from "../../components/Board/Board"
import Keyboard from '../../components/Keyboard/Keyboard'
import Results from '../../components/Results/Results'
import DifficultySelect from '../../components/DifficultySelect/DifficultySelect'

const GameBoard = ({ user }) => {
  const [wordCount, setWordCount] = useState()
  const [guessLimit, setGuessLimit] = useState()
  const [secretWords, setSecretWords] = useState([])
  const [guesses, setGuesses] = useState([])
  const [currentGuess, setCurrentGuess] = useState('')
  const [charCount, setCharCount] = useState(0)
  const [winner, setWinner] = useState(false)
  const [loss, setLoss] = useState(false)
  const [message, setMessage] = useState('')
  const [usedLetters, setUsedLetters] = useState([])

  const titles = {
    1: 'Wordle',
    2: 'Dordle',
    4: 'Quordle',
    8: 'Octordle',
    16: 'Sedecordle'
  }

  const messages = {
    intro: `Try to guess ${wordCount} words in ${guessLimit} guesses!`,
    win: `You got it in ${guesses.length}!`,
    loss: `Better luck next time! The ${wordCount === 1 ? `word was: ${secretWords[0]}` : `words were: ${secretWords.join(', ')}`}`,
    invalid: 'invalid guess'
  }

  useEffect(() => {
    setSecretWords(wordlist.getWord(wordCount))
    setMessage(messages.intro)
  }, [wordCount, messages.intro])

  useEffect(() => {
    setGuessLimit(wordCount + 5)
    setGuesses([])
    setCurrentGuess('')
    setCharCount(0)
    setWinner(false)
    setLoss(false)
    setUsedLetters([])
  }, [secretWords, wordCount])

  const updateWordCount = (num) => {
    setWordCount(num)
  }

  const updateGameState = useCallback((evt) => {
    const key = evt.type === 'click' ? evt.target.id : evt.key.toLowerCase()
    if (!winner && !loss) {
      if (key.length === 1 && key >= 'a' && key <= 'z' && charCount < 5) {
        setCurrentGuess(currentGuess + key)
        setCharCount(charCount + 1)
      } else if (key === 'backspace' && charCount > 0) {
        setCurrentGuess(currentGuess.slice(0, -1))
        setCharCount(charCount - 1)
      } else if (key === 'enter' && charCount === 5){
        if (wordlist.checkWord(currentGuess)) {
          currentGuess.split('').forEach(c => {
            if (!usedLetters.includes(c)) usedLetters.push(c)
          })
          setGuesses([...guesses, currentGuess])
          setMessage('')
          setCurrentGuess('')
          setCharCount(0)
        }
      }
    }
  }, [charCount, currentGuess, guesses, loss, usedLetters, winner])
  
  useEffect(() => {
    window.addEventListener('keydown', updateGameState)
    return () => {
      window.removeEventListener('keydown', updateGameState)
    }
  }, [updateGameState])

  useEffect(() => {
    setWinner(utilities.checkWinner(guesses, secretWords))
    setLoss(utilities.checkLoss(guesses, guessLimit))
    if (winner) {
      setMessage(messages.win)
    }
    else if (loss) {
      setMessage(messages.loss)
    }
    if (user) {
      scoreService.create(winner, wordCount, guesses.length)
    }
  }, [winner, loss, messages.win, messages.loss, guesses, secretWords, guessLimit, wordCount, user])

  const resetGame = () => {
    setSecretWords(wordlist.getWord(wordCount))
  }

  return (
    <>
      <DifficultySelect updateWordCount={updateWordCount}/>
      <h1>{titles[wordCount]}</h1>
      <p>{wordCount && !winner && !loss && message}</p>
      <p>{!wordCount && 'Select a mode to play'}</p>
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
      {wordCount && <Keyboard updateGameState={updateGameState} usedLetters={usedLetters}/>}
      {(winner || loss) && <Results
        message={message}
        user={user}
        wordCount={wordCount}
        resetGame={resetGame}
      />}
    </>
  )
}

export default GameBoard