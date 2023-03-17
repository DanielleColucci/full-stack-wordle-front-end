import styles from './Row.module.css'
import * as utilities from '../../utilities/utilities'

const UsedRow = ({ guess, word }) => {
  const guessArr = guess.split('')
  const colorsArr = utilities.getColorArray(guess, word)
  console.log(colorsArr);
  return (
    <div className={styles.row}>
      {guessArr.map((letter, idx) => (
        <div key={idx}>{letter}</div>
      ))}
    </div>
  )
}

export default UsedRow