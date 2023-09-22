import { FormEventHandler, useState } from 'react';
import styles from '../styles/Login.module.css'
import { signIn } from 'next-auth/react'

const Login = () => {
    const [user, setUser] = useState({ username: "", password: "" });
    const [error, setError] = useState('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const response = await signIn('credentials', {
            username: user.username,
            password: user.password,
            redirect: false
        }, { callbackUrl: '/dashboard' });
        console.log("response", response);
    }   

    return (
        <div className={styles.loginDiv}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                {error && (<p style={{ color: 'red' }}>{error}</p>)}
                <h2>Login</h2>
                <input type="text" placeholder="Username" onChange={(e) => { setUser({ ...user, username: e.target.value }) }} />
                <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
