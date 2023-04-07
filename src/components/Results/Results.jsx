import styles from './Results.module.css'
import { useState, useEffect } from 'react'
import * as scoreService from '../../services/scoreService'

const Results = ({ wordCount, user, message}) => {
  const [scores, setScores] = useState([])

  useEffect(() => {
    const fetchScores = async () => {
      const data = await scoreService.modeIndex(wordCount, user)
      setScores(data)
    }
    fetchScores()
  },[user, wordCount])

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <p className={styles.message}>{message}</p>
        <div className={styles.resultsContainer}>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount}</div>
            <div className={styles.result}></div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 1}</div>
            <div className={styles.result}></div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 2}</div>
            <div className={styles.result}></div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 3}</div>
            <div className={styles.result}></div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 4}</div>
            <div className={styles.result}></div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 5}</div>
            <div className={styles.result}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results