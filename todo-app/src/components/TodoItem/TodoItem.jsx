import React, { useState } from 'react'
import styles from './TodoItem.module.css';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, todoList, setTodoList }) => {
    const [isCompletedTodo, setIsCompletedTodo] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    const toggleComplete = () => {
        setIsCompletedTodo(!isCompletedTodo);
    }

    const deleteTodoItem = () => {
        setTimeout(() => {
            let listAfterDeletion = todoList.filter(todoItem => todoItem.createdTime !== todo.createdTime);
            setTodoList(listAfterDeletion);
        }, 200)
    }

    return (
        <>
            <div className={`${styles.todoItem}  ${isDeleted ? styles.deleteAnimation : ""}`}>
                <div className={styles.listData}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={isCompletedTodo}
                            onChange={toggleComplete}
                        />
                    </ListItemIcon>
                    <span style={isCompletedTodo ? { textDecoration: "line-through" } : {}} className={styles.data}>{todo.text}</span>
                </div>
                <div>
                    {/* <button className={styles.cancelButton} onClick={deleteTodoItem}>X</button> */}
                    <DeleteIcon className={styles.deleteBtn} onClick={() => { setIsDeleted(true); deleteTodoItem() }} />
                </div>
            </div>
        </>
    )
}

export default TodoItem
