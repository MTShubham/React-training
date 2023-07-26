import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const CompB = () => {
    const { Id } = useParams();
    return (
        <div>
            <p>CompB : Id passed through query parameter - {Id}</p>
            <button>
                <NavLink to="/">Homepage</NavLink>
            </button>
            <button>
                <NavLink to="/compa">CompA</NavLink>
            </button>
        </div>
    )
}

export default CompB
