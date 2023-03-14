import Row from "../Row/Row"
import styles from './Board.module.css'

const Board = (props) => {
  const guessLimitArr = new Array(props.guessLimit).fill(null)
  return (
    <div className={styles.board}>
      {guessLimitArr.map((x, idx) => (
        <Row key={idx} />
      ))}
    </div>
  )
}

export default Board