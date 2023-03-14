import styles from './Row.module.css'

const UsedRow = ({ guess }) => {
  const guessArr = guess.split('')
  return (
    <div className={styles.row}>
      {guessArr.map((letter, idx) => (
        <div key={idx}>{letter}</div>
      ))}
    </div>
  )
}

export default UsedRow