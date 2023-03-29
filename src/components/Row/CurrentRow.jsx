import styles from './Row.module.css'
import * as wordlist from '../../data/wordlist'

const CurrentRow = (props) => {
  const currentGuessArr = props.currentGuess.split('')
  const emptyLetters = Array(5 - props.currentGuess.length).fill(null)
  
  return ( 
    <>
      {(props.guesses.length < props.guessLimit && props.wordGuessIdx < 0) && 
        <div 
          className={`${styles.row} 
          ${(props.currentGuess.length === 5 && !wordlist.checkWord(props.currentGuess)) ? styles.invalid : ''}`
          }
        >
          {currentGuessArr.map((letter, idx) => (
            <div key={idx}>{letter.toUpperCase()}</div>
          ))}
          {emptyLetters.map((letter, idx) => (
            <div key={idx}></div>
          ))}
        </div>
      }
    </>
  )
}

export default CurrentRow