import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <p>Dashboard</p>
            {/* Outlet will render the inner route elements */}
            <Outlet />
        </div>
    )
}

export default Dashboard
