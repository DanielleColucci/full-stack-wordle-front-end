import styles from './Keyboard.module.css'

const Keyboard = () => {
  return (
    <div className={styles.keyboard}>
      <div className={styles.keyboardRow}>
        <div id='q' className={styles.key}>Q</div>
        <div id='w' className={styles.key}>W</div>
        <div id='e' className={styles.key}>E</div>
        <div id='r' className={styles.key}>R</div>
        <div id='t' className={styles.key}>T</div>
        <div id='y' className={styles.key}>Y</div>
        <div id='u' className={styles.key}>U</div>
        <div id='i' className={styles.key}>I</div>
        <div id='o' className={styles.key}>O</div>
        <div id='p' className={styles.key}>P</div>
      </div>
      <div className={styles.keyboardRow}>
        <div id='a' className={styles.key}>A</div>
        <div id='s' className={styles.key}>S</div>
        <div id='d' className={styles.key}>D</div>
        <div id='f' className={styles.key}>F</div>
        <div id='g' className={styles.key}>G</div>
        <div id='h' className={styles.key}>H</div>
        <div id='j' className={styles.key}>J</div>
        <div id='k' className={styles.key}>K</div>
        <div id='l' className={styles.key}>L</div>
        <div id='enter' className={`${styles.key} ${styles.enterTop}`}></div>
      </div>
      <div className={styles.keyboardRow}>
        <div id='backspace' className={styles.key}>⌫</div>
        <div id='z' className={styles.key}>Z</div>
        <div id='x' className={styles.key}>X</div>
        <div id='c' className={styles.key}>C</div>
        <div id='v' className={styles.key}>V</div>
        <div id='b' className={styles.key}>B</div>
        <div id='n' className={styles.key}>N</div>
        <div id='m' className={styles.key}>M</div>
        <div id='enter' className={`${styles.key} ${styles.enterLeft}`}></div>
        <div id='enter' className={`${styles.key} ${styles.enterRight}`}>↵</div>
      </div>
    </div>
  )
}

export default Keyboard