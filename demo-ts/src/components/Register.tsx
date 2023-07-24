import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Validator from 'validator'
import styles from '../css/register.module.css'
import { useContext } from 'react'
import { UserContext, User } from '../contexts/users.context'
import { NavLink } from 'react-router-dom'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<User>();

  const { saveUser } = useContext(UserContext);

  const submitData = (data: User) => {
    saveUser(data);
  }

  return (
    <div className={styles.registerDiv}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(submitData)} className={styles.registerForm}>

        <div className={styles.label}>
          <label htmlFor="name">Name: </label>
        </div>
        <div className={styles.inputDiv}>
          <input
            {...register("name", { minLength: 3, maxLength: 30, required: true, pattern: /^[a-zA-Z]+$/i })}
            type="text"
            placeholder="Name"
            id="name"
          />
        </div>

        <div className={styles.label}>
          <label htmlFor="email">Email : </label>
        </div>
        <div className={styles.inputDiv}>
          <input
            {...register("email", { required: true, validate: (input) => Validator.isEmail(input) })}
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
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            placeholder="Password"
            id="password"
          />
        </div>

        <div className={styles.label}>
          <label htmlFor="gender">Gender: </label>
        </div>
        <div className={styles.inputDiv}>
          <input
            {...register("gender")}
            type="radio"
            value="Male"
          /> Male
          <input
            {...register("gender")}
            type="radio"
            value="Female"
          /> Female
        </div>

        <div className={styles.label}>
          <label htmlFor="city">City: </label>
        </div>
        <div className={styles.inputDiv}>
          <div>
            <input
              {...register("city")}
              type="checkbox"
              value="Ahmedabad"
            /> Ahmedabad
          </div>
          <div>
            <input
              {...register("city")}
              type="checkbox"
              value="Surat"
            /> Surat
          </div>
          <div>
            <input
              {...register("city")}
              type="checkbox"
              value="Bhilad"
            /> Bhilad
          </div>
        </div>

        <button className={styles.registerBtn}>Sign Up</button>
        <small>Already have an account? <NavLink to="/" className={styles.navigateTologinLink}>Login</NavLink> </small>

      </form>
    </div>
  )
}

export default Register
