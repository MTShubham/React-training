import React from 'react';
import usePersonById from '../hooks/usePersonById';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../css/persons.module.css'

const PersonById = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isLoading, data, isError, error, isFetching } = usePersonById(id);   // usePersonById is a custom hook to get the people by id

    if (isLoading || isFetching)
        return <h1>Loading...</h1>

    if (isError)
        return <h2>{error.message}</h2>

    return (
        <>
            <button className={`${styles.containedBtn} ${styles.primaryBtn} ${styles.backBtn}`} onClick={() => navigate(-1)}>BACK</button>
            <div className={`${styles.peopleDiv} ${styles.personDetails}`}>
                <h3>{data?.data.name}</h3>
                <p>{data?.data.description}</p>
            </div>
        </>
    )
}

export default PersonById
