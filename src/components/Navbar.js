import styles from './Navbar.module.css'
import { useLogout } from '../hooks/useLogout'


import { NavLink } from 'react-router-dom'


export default function Navbar() {

  const { logout } = useLogout()

  return (
    <nav className={styles.navbar} >
      <ul>
        <li className={styles.title} >myMoney</li>

        <li> <NavLink to="/login" >Login</NavLink></li>
        <li> <NavLink to="/signup" >Signup</NavLink></li>

        <li>
          <button className="btn" onClick={logout} >Log Out</button>
        </li>
      </ul>
      
    </nav>
  )
}
