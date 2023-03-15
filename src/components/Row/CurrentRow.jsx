import styles from './Row.module.css'

const CurrentRow = (props) => {
  const currentGuessArr = props.currentGuess.split('')
  const emptyLetters = Array(5 - props.currentGuess.length).fill(null)
  
  return ( 
    <div className={styles.row}>
      {currentGuessArr.map((letter, idx) => (
        <div key={idx}>{letter}</div>
      ))}
      {emptyLetters.map((letter, idx) => (
        <div key={idx}>{letter}</div>
      ))}
    </div>
  )
}

export default CurrentRow