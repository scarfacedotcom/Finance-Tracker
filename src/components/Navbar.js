import styles from './Navbar.module.css'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


import { NavLink } from 'react-router-dom'


export default function Navbar() {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className={styles.navbar} >
      <ul>
        <li className={styles.title} >myMoney</li>

        {!user && (
          <>
            <li> <NavLink to="/login" >Login</NavLink></li>
            <li> <NavLink to="/signup" >Signup</NavLink></li>
          </>
        )}

        {user && (
          <>
            <li>Hello {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout} >Log Out</button>
            </li>
          </>
        )}

      </ul>
      
    </nav>
  )
}
