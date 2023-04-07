import styles from './Results.module.css'
import { useState, useEffect } from 'react'
import * as scoreService from '../../services/scoreService'

const Results = (props) => {
  const [scores, setScores] = useState([])

  useEffect(() => {
    const fetchScores = async () => {
      const data = await scoreService.modeIndex(props.wordCount, props.user)
      setScores(data)
    }
    fetchScores()
  },[props.user, props.wordCount])

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h1 className={styles.message}>{props.message}</h1>
      </div>
    </div>
  )
}

export default Results