import styles from './Keyboard.module.css'

const Keyboard = ({ updateGameState, usedLetters}) => {
  return (
    <div className={styles.keyboard}>
      <div className={styles.keyboardRow}>
        <div 
          id='q' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('q') ? styles.usedLetter : ''}`}
        >
          Q
        </div>
        <div 
          id='w' 
          onClick={updateGameState}
          className={`${styles.key} ${usedLetters.includes('w') ? styles.usedLetter : ''}`}
        >
          W
        </div>
        <div 
          id='e' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('e') ? styles.usedLetter : ''}`}
        >
          E
        </div>
        <div 
          id='r' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('r') ? styles.usedLetter : ''}`}
        >
          R
        </div>
        <div 
          id='t' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('t') ? styles.usedLetter : ''}`}
        >
          T
        </div>
        <div 
          id='y' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('y') ? styles.usedLetter : ''}`}
        >
          Y
        </div>
        <div 
          id='u' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('u') ? styles.usedLetter : ''}`}
        >
          U
        </div>
        <div 
          id='i' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('i') ? styles.usedLetter : ''}`}
        >
          I
        </div>
        <div 
          id='o' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('o') ? styles.usedLetter : ''}`}
        >
          O
        </div>
        <div 
          id='p' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('p') ? styles.usedLetter : ''}`}
        >
          P
        </div>
      </div>
      <div className={styles.keyboardRow}>
        <div 
          id='a' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('a') ? styles.usedLetter : ''}`}
        >
          A
        </div>
        <div 
          id='s'
          onClick={updateGameState}
          className={`${styles.key} ${usedLetters.includes('s') ? styles.usedLetter : ''}`}
        >
          S
        </div>
        <div 
          id='d' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('d') ? styles.usedLetter : ''}`}
        >
          D
        </div>
        <div 
          id='f' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('f') ? styles.usedLetter : ''}`}
        >
          F
        </div>
        <div 
          id='g' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('g') ? styles.usedLetter : ''}`}
        >
          G
        </div>
        <div 
          id='h' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('h') ? styles.usedLetter : ''}`}
        >
          H
        </div>
        <div 
          id='j' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('j') ? styles.usedLetter : ''}`}
        >
          J
        </div>
        <div 
          id='k' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('k') ? styles.usedLetter : ''}`}
        >
          K
        </div>
        <div 
          id='l' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('l') ? styles.usedLetter : ''}`}
        >
          L
        </div>
        <div 
          id='enter' 
          onClick={updateGameState} 
          className={`${styles.key} ${styles.enterTop}`}
        >
        </div>
      </div>
      <div className={styles.keyboardRow}>
        <div 
          id='backspace' 
          onClick={updateGameState} 
          className={`${styles.key} ${styles.backspace}`}
        >
          ⌫
        </div>
        <div 
          id='z'
          onClick={updateGameState}
          className={`${styles.key} ${usedLetters.includes('z') ? styles.usedLetter : ''}`}
        >
          Z
        </div>
        <div 
          id='x' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('x') ? styles.usedLetter : ''}`}
        >
          X
        </div>
        <div 
          id='c' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('c') ? styles.usedLetter : ''}`}
        >
          C
        </div>
        <div 
          id='v' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('v') ? styles.usedLetter : ''}`}
        >
          V
        </div>
        <div 
          id='b' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('b') ? styles.usedLetter : ''}`}
        >
          B
        </div>
        <div 
          id='n' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('n') ? styles.usedLetter : ''}`}
        >
          N
        </div>
        <div 
          id='m' 
          onClick={updateGameState} 
          className={`${styles.key} ${usedLetters.includes('m') ? styles.usedLetter : ''}`}
        >
          M
        </div>
        <div 
          id='enter' 
          onClick={updateGameState} 
          className={`${styles.key} ${styles.enterLeft}`}
        >
        </div>
        <div 
          id='enter' 
          onClick={updateGameState} 
          className={`${styles.key} ${styles.enterRight}`}
        >
          ↵
        </div>
      </div>
    </div>
  )
}

export default Keyboard