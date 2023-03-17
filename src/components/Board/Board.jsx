import styles from './Board.module.css'
import CurrentRow from "../Row/CurrentRow"
import UsedRow from '../Row/UsedRow'
import EmptyRow from '../Row/EmptyRow'

const Board = (props) => {
  const { guesses, guessLimit, word, currentGuess } = props
  const wordGuessIdx = guesses.indexOf(word)
  let emptyRows 
  if (wordGuessIdx >= 0) emptyRows = Array(guessLimit - wordGuessIdx - 1).fill(null)
  else if (guesses.length < guessLimit) emptyRows = Array(guessLimit - guesses.length - 1).fill(null)
  else emptyRows = []
  return (
    <div className={styles.board}>
      {wordGuessIdx >= 0 ?
        guesses.map((guess, idx) => {
        return idx <= wordGuessIdx &&
          <UsedRow 
            key={idx} 
            guess={guess}
            word={word}
          />
        })
        : 
        guesses.map((guess, idx) => (
          <UsedRow 
            key={idx}
            guess={guess}
            word={word}
          />
        ))
      }
      <CurrentRow 
        wordGuessIdx={wordGuessIdx}
        currentGuess={currentGuess}
        guesses={guesses}
        guessLimit={guessLimit}
      />
      {emptyRows.map((row, idx) => (
        <EmptyRow key={idx} />
      ))}
    </div>
  )
}

export default Board