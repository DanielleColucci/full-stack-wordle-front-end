import styles from './Row.module.css'

const CurrentRow = ({ paddedGuess }) => {
  const currentGuessArr = paddedGuess.split('')
  return ( 
    <div className={styles.row}>
      {currentGuessArr.map((letter, idx) => (
        <div key={idx}>{letter}</div>
      ))}
    </div>
  )
}

export default CurrentRow