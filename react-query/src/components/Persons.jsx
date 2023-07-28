import React from 'react';
import usePersonData from '../hooks/usePersonData';
import { NavLink } from 'react-router-dom';
import AddPerson from './AddPerson';
import styles from '../css/persons.module.css'

const afterSuccess = (data) => {
    console.log("Success", data);
}
const afterError = (error) => {
    console.log("Success", error);
}

const Persons = () => {
    // refetch is used to manually fetch the data from API. If we want the data after onClick, not when component mounts. Then in options enabled:false. So that it will not fetch on mount. And in onClick we can pass the refetch handler.
    const { isLoading, data, isError, error, isFetching, refetch } = usePersonData(afterSuccess, afterError);   // usePersonData is a hook to get the peoples from an api
    // console.log({isLoading, isFetching});

    if (isLoading || isFetching)
        return <h1>Loading...</h1>

    if (isError)
        return <h2>{error.message}</h2>

    return (
        <div style={{ margin: "20px" }}>
            <div>
                <AddPerson />
            </div>
            <br /><br />
            <button onClick={refetch} className={`${styles.successBtn} ${styles.containedBtn} ${styles.fetchBtn}`}>Fetch Data</button>
            
            <div className={styles.peoplesGrid}>
                {data?.map(people => (
                    <div className={styles.peopleDiv} key={people.id}>
                        <h4>{people.name}</h4>
                        <p className={styles.description}>{people.description}</p>
                        <button  className={styles.redirectBtn}><NavLink to={`person/${people.id}`} className={styles.redirectLink}>View Description</NavLink></button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Persons
