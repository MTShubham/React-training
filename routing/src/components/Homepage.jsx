import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.css'

const Homepage = () => {
    return (
        <div>
            <p>Home Page</p>
            <button className={styles.btn}>
                <NavLink to="/compA">CompA</NavLink>
            </button>
            <button>
                <NavLink to="/compB">CompB</NavLink>
            </button>
        </div>
    )
}

export default Homepage
