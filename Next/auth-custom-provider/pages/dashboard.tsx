import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';

const Dashboard = () => {
    const router = useRouter();
    const { data: session }: any = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/login');
        }
    });
    console.log("session", session);
    return (
        <div>
            {session && (
                <p>Username - {session.user?.username}</p>
            )}
        </div>
    )
}

export default Dashboard
