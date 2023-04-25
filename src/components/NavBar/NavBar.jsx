import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.nav}>
      {user ?
        <div className={styles.container}>
          <div className={styles.navLeft}>
            <Link to='/play'>PLAY</Link>
            <Link to='/profiles'>PROFILES</Link>
          </div>
          <div className={styles.navRight}>
            <Link to='' onClick={handleLogout}>LOG OUT</Link>
            <Link to='/change-password'>CHANGE PASSWORD</Link>
          </div>
        </div>
      :
      <div className={styles.container}>
          <div className={styles.navLeft}>
            <Link to='/play'>PLAY</Link>
          </div>
          <div className={styles.navRight}>
            <Link to='/login'>LOG IN</Link>
            <Link to='/signup'>SIGN UP</Link>
          </div>
        </div>
      }
    </nav>
  )
}

export default NavBar
