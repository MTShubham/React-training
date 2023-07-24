import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Validator from 'validator'
import styles from '../css/login.module.css'
import { useContext } from 'react'
import { UserContext, User } from '../contexts/users.context'
import { NavLink } from 'react-router-dom'

const Login = () => {
    const { register: login, handleSubmit, formState: { errors } } = useForm<User>();

    const { loginUser } = useContext(UserContext);

    const submitData = (data: User) => {
        loginUser(data);
    }

    return (
        <div className={styles.loginDiv}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(submitData)} className={styles.loginForm}>

                <div className={styles.label}>
                    <label htmlFor="email">Email : </label>
                </div>
                <div className={styles.inputDiv}>
                    <input
                        {...login("email", { required: true, validate: (input) => Validator.isEmail(input) })}
                        type="email"
                        placeholder="Email"
                        id="email"
                    />
                </div>

                <div className={styles.label}>
                    <label htmlFor="password">Password : </label>
                </div>
                <div className={styles.inputDiv}>
                    <input
                        {...login("password", { required: true, minLength: 6 })}
                        type="password"
                        placeholder="Password"
                        id="password"
                    />
                </div>

                <button className={styles.loginBtn}>Login</button>
                <small>Don't have an account? <NavLink to="/register" className={styles.navigateToRegisterLink}>Sign Up</NavLink></small>
            </form>
        </div>
    )
}

export default Login
