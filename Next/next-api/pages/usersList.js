import axios from 'axios';
import React, { useState } from 'react'

const UsersList = () => {
    const [usersData, setUsersData] = useState([]);
    const [newData, setNewData] = useState({ name: "" });

    const getUsersData = async () => {
        const res = await axios.get("/api/users");
        console.log(res.data);
        setUsersData(res.data);
    }

    const saveUserData = async () => {
        const savedData = await axios.post("/api/users", { users: newData });
    }

    const deleteUser = async (userId) => {
        const res = await axios.delete(`/api/users/${userId}`)
        getUsersData();
    }

    return (
        <>
            <div>
                <input type="text" placeholder="Enter name" onChange={(e) => { setNewData({ ...newData, name: e.target.value }) }} />
                <button onClick={saveUserData}>Submit</button>
            </div>
            <button onClick={getUsersData}>Get User's Data</button>
            {usersData?.map(user => {
                return (
                    <p key={user.id}>{user.id} - {user.name} <button onClick={() => deleteUser(user.id)}>Delete</button></p>
                )
            })}
        </>
    )
}

export default UsersList
