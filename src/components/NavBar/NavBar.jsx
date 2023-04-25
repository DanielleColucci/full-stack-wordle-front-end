import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.nav}>
      {user ?
        <div className={styles.container}>
          <Link to='/profiles'>Profiles</Link>
          <Link to='' onClick={handleLogout}>LOG OUT</Link>
          <Link to='/change-password'>Change Password</Link>
        </div>
      :
        <div className={styles.container}>
          <Link to='/login'>LOG IN</Link>
          <Link to='/signup'>SIGN UP</Link>
        </div>
      }
    </nav>
  )
}

export default NavBar
