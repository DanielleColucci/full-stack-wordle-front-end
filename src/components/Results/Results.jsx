import styles from './Results.module.css'

const Results = (props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h1 className={styles.message}>This is a results component</h1>
      </div>
    </div>
  )
}

export default Results