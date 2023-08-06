import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';

const Dashboard = () => {
    const router = useRouter();

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/');
        }
    });
    console.log({ session, status })

    return (
        <div>
            {session && (
                <p>Dashboard</p>
            )}
        </div>
    )
}

export default Dashboard
