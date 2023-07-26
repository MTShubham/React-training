import React from 'react'
import { Outlet } from 'react-router-dom'

const InnerDashboard2 = () => {
    return (
        <div>
            <p>Inner Dashboard 2</p>
            <Outlet />
        </div>
    )
}

export default InnerDashboard2
