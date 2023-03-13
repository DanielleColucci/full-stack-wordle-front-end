import { useState, useEffect } from "react"

const GameBoard = ({ wordCount }) => {
  const [guessLimit, setGuessLimit] = useState()
  const secretWords = []

  useEffect(() => {
    setGuessLimit(wordCount + 5)
    for (let i = wordCount; i > 0; i--) {
      // add secret words here
    }
  }, [wordCount])

  const titles = {
    1: 'Wordle',
    2: 'Dordle',
    4: 'Quordle',
    8: 'Octordle',
    16: 'Sedecordle'
  }
  return (
    <h1>{titles[wordCount]}</h1>
    // map to boards here
  )
}

export default GameBoard