import styles from './Board.module.css'
import CurrentRow from "../Row/CurrentRow"
import UsedRow from '../Row/UsedRow'
import EmptyRow from '../Row/EmptyRow'

const Board = (props) => {
  const emptyRows = props.guesses.length < props.guessLimit ? new Array(props.guessLimit - props.guesses.length - 1).fill(null): []
  return (
    <div className={styles.board}>
      {props.guesses.map((guess, idx) => (
        <UsedRow key={idx} guess={guess}/>
      ))}
      <CurrentRow 
        currentGuess={props.currentGuess}
        guesses={props.guesses}
        guessLimit={props.guessLimit}
      />
      {emptyRows.map((row, idx) => (
        <EmptyRow key={idx} />
      ))}
    </div>
  )
}

export default Board