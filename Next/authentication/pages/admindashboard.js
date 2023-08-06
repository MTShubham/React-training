import { useSession } from 'next-auth/react'
import React from 'react'

const AdminDashboard = () => {
    const { data: session } = useSession()
    // session is always non-null inside this page, all the way down the React tree.
    return (
        <div>
            <p>Admin Dashboard</p>
        </div>
    )
}

AdminDashboard.auth = true

export default AdminDashboard