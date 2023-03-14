import styles from './Board.module.css'
import Row from "../Row/Row"
import UsedRow from '../Row/UsedRow'
import EmptyRow from '../Row/EmptyRow'

const Board = (props) => {
  const emptyRows = new Array(props.guessLimit - props.guesses.length - 1).fill(null)
  console.log(emptyRows);
  return (
    <div className={styles.board}>
      {props.guesses.map((guess, idx) => (
        <UsedRow key={idx} guess={guess}/>
      ))}
      <Row />
      {emptyRows.map((row, idx) => (
        <EmptyRow key={idx} />
      ))}
    </div>
  )
}

export default Board