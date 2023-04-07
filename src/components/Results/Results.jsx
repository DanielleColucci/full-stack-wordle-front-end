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

  // counting number of each win option (count+1, count+2, etc) and losses
  // array is of format [1, 2, 3, 4, 5, 6, losses]
  const resultsArr = new Array(7).fill(0)
  scores.forEach(s => {
    if (!s.win) resultsArr[6]++
    else resultsArr[s.value - 1]++
  })

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <p className={styles.message}>{message}</p>
        <div className={styles.resultsContainer}>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount}</div>
            <div className={styles.bar}></div>
            <div className={styles.result}>{Math.round(resultsArr[0] / scores.length * 100)}</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 1}</div>
            <div className={styles.bar}></div>
            <div className={styles.result}>{Math.round(resultsArr[1] / scores.length * 100)}</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 2}</div>
            <div className={styles.bar}></div>
            <div className={styles.result}>{Math.round(resultsArr[2] / scores.length * 100)}</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 3}</div>
            <div className={styles.bar}></div>
            <div className={styles.result}>{Math.round(resultsArr[3] / scores.length * 100)}</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 4}</div>
            <div className={styles.bar}></div>
            <div className={styles.result}>{Math.round(resultsArr[4] / scores.length * 100)}</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 5}</div>
            <div className={styles.bar}></div>
            <div className={styles.result}>{Math.round(resultsArr[5] / scores.length * 100)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results