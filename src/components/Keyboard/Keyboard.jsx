import styles from './Keyboard.module.css'

const Keyboard = (props) => {
  return (
    <div className={styles.keyboard}>
      <div className={styles.keyboardRow}>
        <div id='q' onClick={props.onClick} className={styles.key}>Q</div>
        <div id='w' onClick={props.onClick} className={styles.key}>W</div>
        <div id='e' onClick={props.onClick} className={styles.key}>E</div>
        <div id='r' onClick={props.onClick} className={styles.key}>R</div>
        <div id='t' onClick={props.onClick} className={styles.key}>T</div>
        <div id='y' onClick={props.onClick} className={styles.key}>Y</div>
        <div id='u' onClick={props.onClick} className={styles.key}>U</div>
        <div id='i' onClick={props.onClick} className={styles.key}>I</div>
        <div id='o' onClick={props.onClick} className={styles.key}>O</div>
        <div id='p' onClick={props.onClick} className={styles.key}>P</div>
      </div>
      <div className={styles.keyboardRow}>
        <div id='a' onClick={props.onClick} className={styles.key}>A</div>
        <div id='s' onClick={props.onClick} className={styles.key}>S</div>
        <div id='d' onClick={props.onClick} className={styles.key}>D</div>
        <div id='f' onClick={props.onClick} className={styles.key}>F</div>
        <div id='g' onClick={props.onClick} className={styles.key}>G</div>
        <div id='h' onClick={props.onClick} className={styles.key}>H</div>
        <div id='j' onClick={props.onClick} className={styles.key}>J</div>
        <div id='k' onClick={props.onClick} className={styles.key}>K</div>
        <div id='l' onClick={props.onClick} className={styles.key}>L</div>
        <div id='enter' onClick={props.onClick} className={`${styles.key} ${styles.enterTop}`}></div>
      </div>
      <div className={styles.keyboardRow}>
        <div id='backspace' onClick={props.onClick} className={`${styles.key} ${styles.backspace}`}>⌫</div>
        <div id='z' onClick={props.onClick} className={styles.key}>Z</div>
        <div id='x' onClick={props.onClick} className={styles.key}>X</div>
        <div id='c' onClick={props.onClick} className={styles.key}>C</div>
        <div id='v' onClick={props.onClick} className={styles.key}>V</div>
        <div id='b' onClick={props.onClick} className={styles.key}>B</div>
        <div id='n' onClick={props.onClick} className={styles.key}>N</div>
        <div id='m' onClick={props.onClick} className={styles.key}>M</div>
        <div id='enter' onClick={props.onClick} className={`${styles.key} ${styles.enterLeft}`}></div>
        <div id='enter' onClick={props.onClick} className={`${styles.key} ${styles.enterRight}`}>↵</div>
      </div>
    </div>
  )
}

export default Keyboard