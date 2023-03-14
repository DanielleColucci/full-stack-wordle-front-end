import styles from './Row.module.css'
import { useState } from 'react'

const Row = () => {
  const [form, setForm] = useState({
    1: '',
    2: '',
    3: '',
    4: '', 
    5: ''
  })

  const handleChange = (e) => {
    const key = e.target.value.toLowerCase()
    if (key.length === 1 && key >= 'a' && key <= 'z') {
      setForm({...form, [e.target.id]: key})
      if (e.target.id < 5) {
        const nextSibling = document.getElementById(`${parseInt(e.target.id) + 1}`)
        if (nextSibling) nextSibling.focus()
      }
    } else if (key === '') {
      setForm({...form, [e.target.id]: key})
      if (e.target.id > 1) {
        const prevSibling = document.getElementById(`${parseInt(e.target.id) - 1}`)
        if (prevSibling) prevSibling.focus()
      }
    }
  }

  return ( 
    <form className={styles.row}>
      <input 
        onChange={handleChange} 
        id={1} 
        type="text" 
        value={form[1]} 
        maxLength={1} 
        autoFocus
      />
      <input 
        onChange={handleChange} 
        id={2}
        type="text" 
        value={form[2]} 
        maxLength={1} 
      />
      <input 
        onChange={handleChange} 
        id={3} 
        type="text" 
        value={form[3]} 
        maxLength={1} 
      />
      <input 
        onChange={handleChange} 
        id={4} 
        type="text" 
        value={form[4]} 
        maxLength={1} 
      />
      <input 
        onChange={handleChange} 
        id={5} 
        type="text" 
        value={form[5]} 
        maxLength={1} 
      />
    </form>
  )
}

export default Row