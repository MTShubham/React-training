import React, { useState } from 'react'
import styles from './AddTodo.module.css';
import Button from '@mui/material/Button';

const AddTodo = ({ todoList, setTodoList }) => {
    const [newTodoText, setNewTodoText] = useState("");
    const [error, setError] = useState("");
    const [isTodoExist, setIsTodoExist] = useState(false);

    const changeTodoTitle = (e) => {
        setNewTodoText(e.target.value);
        setIsTodoExist(false);
        setError("");
    }

    function checkIfTodoAlreadyExist(newTodoText) {
        return todoList.some((todo) => todo.text === newTodoText);
    }

    const addTodo = (e) => {
        e.preventDefault();
        let currentTime = new Date();
        if (!checkIfTodoAlreadyExist(newTodoText)) {
            setIsTodoExist(false);
            if (newTodoText) {
                let newTodoItem = [...todoList, { text: newTodoText, done: false, createdTime: currentTime }];
                setTodoList(newTodoItem);
            }
        }
        else {
            setError(`${newTodoText} already exists. You are unable to add it.`);
            setIsTodoExist(true);
        }
        setNewTodoText("");
    }

    return (
        <div className={styles.addTodoDiv}>
            <form onSubmit={addTodo}>
                <input type="text" value={newTodoText} onChange={changeTodoTitle} placeholder='Add Todo Item' />
                <Button variant="contained" disabled={isTodoExist} type="submit" className={styles.addBtn   }>Add Task</Button>
            </form>
            {error && (<p className={styles.error}>{error}</p>)}
        </div>
    )
}

export default AddTodo;