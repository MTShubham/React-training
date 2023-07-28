import React, { useState } from 'react'
import useAddPerson from '../hooks/useAddPerson';
import styles from '../css/persons.module.css'

const AddPerson = () => {
    const [personData, setPersonData] = useState({ name: "", description: "" });
    const [isFormOpen, setIsFormOpen] = useState(false);
    const { mutate: addPerson } = useAddPerson();

    const handleAddPerson = (e) => {
        e.preventDefault();
        if (personData.name && personData.description) {
            addPerson(personData);        // similar to mutate({name})
            setPersonData({ name: "", description: "" });
        }
    }

    return (
        <>
            <button className={`${styles.primaryBtn} ${styles.addBtn} ${styles.containedBtn}`} style={{ display: isFormOpen ? "none" : "block" }} onClick={() => setIsFormOpen(true)}>Add New Data</button>
            <form onSubmit={handleAddPerson} className={styles.addPersonForm} style={{ display: isFormOpen ? "block" : "none" }}>
                <h2>Add Person's Data</h2>
                <div className={styles.inputDiv}>
                    <div>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div>
                        <input type="text" value={personData.name} onChange={(e) => { setPersonData({ ...personData, name: e.target.value }) }} />
                    </div>
                </div>
                <div className={styles.inputDiv}>
                    <div>
                        <label htmlFor="decription">Description</label>
                    </div>
                    <div>
                        <textarea rows="5" cols="100" value={personData.description} onChange={(e) => { setPersonData({ ...personData, description: e.target.value }) }} />
                    </div>
                </div>
                <button type="submit" className={`${styles.primaryBtn} ${styles.containedBtn}`}>Save</button>
                <button type="submit" className={`${styles.primaryOutlinedBtn} ${styles.closeBtn}`} onClick={() => setIsFormOpen(false)}>Close Form</button>
            </form>
        </>
    )
}

export default AddPerson
