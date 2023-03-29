import styles from './Keyboard.module.css'

const Keyboard = (props) => {
  return (
    <div className={styles.keyboard}>
      <div className={styles.keyboardRow}>
        <div id='q' onClick={props.updateGameState} className={styles.key}>Q</div>
        <div id='w' onClick={props.updateGameState} className={styles.key}>W</div>
        <div id='e' onClick={props.updateGameState} className={styles.key}>E</div>
        <div id='r' onClick={props.updateGameState} className={styles.key}>R</div>
        <div id='t' onClick={props.updateGameState} className={styles.key}>T</div>
        <div id='y' onClick={props.updateGameState} className={styles.key}>Y</div>
        <div id='u' onClick={props.updateGameState} className={styles.key}>U</div>
        <div id='i' onClick={props.updateGameState} className={styles.key}>I</div>
        <div id='o' onClick={props.updateGameState} className={styles.key}>O</div>
        <div id='p' onClick={props.updateGameState} className={styles.key}>P</div>
      </div>
      <div className={styles.keyboardRow}>
        <div id='a' onClick={props.updateGameState} className={styles.key}>A</div>
        <div id='s' onClick={props.updateGameState} className={styles.key}>S</div>
        <div id='d' onClick={props.updateGameState} className={styles.key}>D</div>
        <div id='f' onClick={props.updateGameState} className={styles.key}>F</div>
        <div id='g' onClick={props.updateGameState} className={styles.key}>G</div>
        <div id='h' onClick={props.updateGameState} className={styles.key}>H</div>
        <div id='j' onClick={props.updateGameState} className={styles.key}>J</div>
        <div id='k' onClick={props.updateGameState} className={styles.key}>K</div>
        <div id='l' onClick={props.updateGameState} className={styles.key}>L</div>
        <div id='enter' onClick={props.updateGameState} className={`${styles.key} ${styles.enterTop}`}></div>
      </div>
      <div className={styles.keyboardRow}>
        <div id='backspace' onClick={props.updateGameState} className={`${styles.key} ${styles.backspace}`}>⌫</div>
        <div id='z' onClick={props.updateGameState} className={styles.key}>Z</div>
        <div id='x' onClick={props.updateGameState} className={styles.key}>X</div>
        <div id='c' onClick={props.updateGameState} className={styles.key}>C</div>
        <div id='v' onClick={props.updateGameState} className={styles.key}>V</div>
        <div id='b' onClick={props.updateGameState} className={styles.key}>B</div>
        <div id='n' onClick={props.updateGameState} className={styles.key}>N</div>
        <div id='m' onClick={props.updateGameState} className={styles.key}>M</div>
        <div id='enter' onClick={props.updateGameState} className={`${styles.key} ${styles.enterLeft}`}></div>
        <div id='enter' onClick={props.updateGameState} className={`${styles.key} ${styles.enterRight}`}>↵</div>
      </div>
    </div>
  )
}

export default Keyboard