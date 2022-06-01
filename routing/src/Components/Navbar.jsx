import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        
    </div>
  )
}

export default Navbar