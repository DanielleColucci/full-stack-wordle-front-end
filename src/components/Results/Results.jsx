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
  const resultsArr = new Array(6).fill(0)
  let loss = 0
  scores.forEach(s => {
    if (s.win) resultsArr[s.value - 1]++
    else loss++
  })
  const widths = resultsArr.map(result => {

    return Math.floor(result / Math.max(...resultsArr) * 100)
  })
  resultsArr.forEach((result,idx) => {
    resultsArr[idx] = Math.floor(result / scores.length * 100)
  })

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <p className={styles.message}>{message}</p>
        <div className={styles.statsContainer}>
          <div className={styles.statUnit}>
            <div className={styles.stat}>{scores.length}</div>
            <div className={styles.statsLabel}>Games Played</div>
          </div>
          <div className={styles.statUnit}>
            <div className={styles.stat}>{scores.length - loss}</div>
            <div className={styles.statsLabel}>Games Won</div>
          </div>
        </div>
        <div className={styles.resultsContainer}>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount}</div>
            <div 
              className={styles.bar}
              style={{width: `${widths[0]}%`}}
            ></div>
            <div className={styles.result}>{resultsArr[0]} %</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 1}</div>
            <div 
              className={styles.bar}
              style={{width: `${widths[1]}%`}}
            ></div>
            <div className={styles.result}>{resultsArr[1]} %</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 2}</div>
            <div 
              className={styles.bar}
              style={{width: `${widths[2]}%`}}
            ></div>
            <div className={styles.result}>{resultsArr[2]} %</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 3}</div>
            <div 
              className={styles.bar}
              style={{width: `${widths[3]}%`}}
            ></div>
            <div className={styles.result}>{resultsArr[3]} %</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 4}</div>
            <div 
              className={styles.bar}
              style={{width: `${widths[4]}%`}}
            ></div>
            <div className={styles.result}>{resultsArr[4]} %</div>
          </div>
          <div className={styles.resultsRow}>
            <div className={styles.label}>{wordCount + 5}</div>
            <div 
              className={styles.bar}
              style={{width: `${widths[5]}%`}}
            ></div>
            <div className={styles.result}>{resultsArr[5]} %</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results