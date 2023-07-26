import React from 'react'
import { Outlet } from 'react-router-dom'

const InnerDashboard1 = () => {
    return (
        <div>
            <p>Inner Dashboard 1</p>
            <Outlet />
        </div>
    )
}

export default InnerDashboard1
