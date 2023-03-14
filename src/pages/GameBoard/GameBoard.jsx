import { useState, useEffect } from "react"
import * as wordlist from '../../data/wordlist'
import Board from "../../components/Board/Board"

const GameBoard = ({ wordCount }) => {
  const [guessLimit, setGuessLimit] = useState()
  const [secretWords, setSecretWords] = useState([])

  useEffect(() => {
    setGuessLimit(wordCount + 5)
    setSecretWords(wordlist.getWord(wordCount))
  }, [wordCount])

  const titles = {
    1: 'Wordle',
    2: 'Dordle',
    4: 'Quordle',
    8: 'Octordle',
    16: 'Sedecordle'
  }
  return (
    <>
      <h1>{titles[wordCount]}</h1>
      <p>Try to guess {wordCount} words in {guessLimit} guesses!</p>
        {secretWords.map((word, idx) => (
          <Board key={idx} word={word}/>
        ))}
    </>
  )
}

export default GameBoard