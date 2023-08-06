import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});
    
    useEffect(() => {
        async function getDashboardData() {
            const res = await axios.get("http://localhost:4000/dashboard");
            setData(res.data);
            setIsLoading(false);
        }
        getDashboardData()
    }, [])
    
    if (isLoading)
        return <h1>Loading...</h1>

    return (
        <div>
            <p>Name - {data.name}</p>
            <p>Following - {data.following}</p>
            <p>Followers - {data.followers}</p>
            <p>Comments - {data.comments}</p>
        </div>
    )
}

export default Dashboard
