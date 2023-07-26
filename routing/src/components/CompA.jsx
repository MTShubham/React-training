import React from 'react'
import { NavLink } from 'react-router-dom'

const CompA = () => {
    return (
        <div>
            <p>CompA</p>
            <button>
                <NavLink to="/">Homepage</NavLink>
            </button>
            <button>
                <NavLink to="/compB/2">CompB</NavLink>
            </button>
        </div>
    )
}

export default CompA
