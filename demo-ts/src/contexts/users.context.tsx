import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

enum Gender {
    'Male' = 'Male',
    'Female' = 'Female',
}

export interface User {
    name?: string,
    email: string,
    password: string,
    city?: string,
    gender?: Gender
}

interface UserContextType {
    users: User[],
    loggedUserEmail: string,
    saveUser: (userToSave: User) => void,
    loginUser: (userLoginData: User) => void,
    logoutUser: () => void
}

export const UserContext = React.createContext<UserContextType>({
    users: [],
    loggedUserEmail: "",
    saveUser: (userToSave: User) => { },
    loginUser: (userLoginData: User) => { },
    logoutUser: () => { }
});

export const UserProvider = ({ children }: any) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loggedUserEmail, setLoggedUserEmail] = useState<string>("");
    const navigate = useNavigate();

    //getting users from local storage
    useEffect(() => {
        let data = localStorage.getItem("users");
        data !== null ? setUsers(JSON.parse(data)) : setUsers([]);
    }, [])

    // saving the user to local storage when users state gets update
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users])

    const saveUser = (userToSave: User) => {
        if (users.filter((userData) => userData.email === userToSave.email).length === 0) {
            setUsers([...users, userToSave]);
        }
        else {
            // TODO: If user is already present
            console.log("User already exists");
        }
    }

    const loginUser = (userLoginData: User) => {
        let userExist = users.filter((userData) => userData.email === userLoginData.email && userData.password === userLoginData.password);
        if (userExist.length > 0) {
            sessionStorage.setItem("logged-user", JSON.stringify(userLoginData.email));
            setLoggedUserEmail(userLoginData.email);
            navigate("/home");
            // TODO: Navigate to loggedin page
        }
        else {
            // TODO: If user doesn't exist
            console.log("Invalid credentials");
        }
    }

    const logoutUser = () => {
        sessionStorage.setItem("logged-user", "");
        navigate("/");
    }

    const values: UserContextType = {
        users,
        loggedUserEmail,
        saveUser,
        loginUser,
        logoutUser
    }

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}