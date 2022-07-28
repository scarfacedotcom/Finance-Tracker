import styles from './Navbar.module.css'


import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className={styles.navbar} >
      <ul>
        <li className={styles.title} >myMoney</li>

        <li> <NavLink to="/login" >Login</NavLink></li>
        <li> <NavLink to="/signup" >Signup</NavLink></li>
      </ul>
      
    </nav>
  )
}
