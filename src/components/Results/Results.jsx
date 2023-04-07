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

  // counting number of each win option (count+1, count+2, etc) and losses, then calculating percentages
  // array is of format [1, 2, 3, 4, 5, 6, losses]
  const resultsArr = new Array(7).fill(0)
  scores.forEach(s => {
    if (!s.win) resultsArr[6]++
    else resultsArr[s.value - 1]++
  })
  resultsArr.forEach((result,idx) => {
    resultsArr[idx] = Math.floor(result / scores.length * 100)
  })

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <p className={styles.message}>{message}</p>
        <div className={styles.resultsContainer}>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount}</div>
            <div 
              className={styles.bar}
              style={{width: `${resultsArr[0]}%`}}
            ></div>
            <div className={styles.result}>{resultsArr[0]}</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 1}</div>
            <div 
              className={styles.bar}
              style={{width: `${resultsArr[2]}%`}}
            ></div>
            <div className={styles.result}>{resultsArr[1]}</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 2}</div>
            <div 
              className={styles.bar}
              style={{width: `${resultsArr[2]}%`}}
            ></div>
            <div className={styles.result}>{resultsArr[2]}</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 3}</div>
            <div 
              className={styles.bar}
              style={{width: `${resultsArr[3]}%`}}
            ></div>
            <div className={styles.result}>{resultsArr[3]}</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 4}</div>
            <div 
              className={styles.bar}
              style={{width: `${resultsArr[4]}%`}}
            ></div>
            <div className={styles.result}>{resultsArr[4]}</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 5}</div>
            <div 
              className={styles.bar}
              style={{width: `${resultsArr[5]}%`}}
            ></div>
            <div className={styles.result}>{resultsArr[5]}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results