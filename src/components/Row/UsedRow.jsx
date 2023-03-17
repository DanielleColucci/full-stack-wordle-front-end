import styles from './Row.module.css'
import * as utilities from '../../utilities/utilities'

const UsedRow = ({ guess, word }) => {
  const guessArr = guess.split('')
  const colorsArr = utilities.getColorArray(guess, word)
  return (
    <div className={styles.row}>
      {guessArr.map((letter, idx) => (
        <div className={styles[colorsArr[idx]]} key={idx}>{letter.toUpperCase()}</div>
      ))}
    </div>
  )
}

export default UsedRow