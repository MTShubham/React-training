import React, { useState } from 'react'
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, todoList, setTodoList }) => {
    const [isCompletedTodo, setIsCompletedTodo] = useState(false);

    const toggleComplete = () => {
        setIsCompletedTodo(!isCompletedTodo);
    }

    const deleteTodoItem = () => {
        let listAfterDeletion = todoList.filter(todoItem => todoItem.createdTime !== todo.createdTime);
        setTodoList(listAfterDeletion);
    }

    return (
        <>
            <tr className={styles.todoItem}>
                <td>
                    <input type="checkbox" checked={isCompletedTodo} onChange={toggleComplete} className={styles.checkbox} />
                </td>
                <td className={styles.dataTd}>
                    <span style={isCompletedTodo ? { textDecoration: "line-through" } : {}} className={styles.data}>{todo.text}</span>
                </td>
                <td>
                    <button className={styles.cancelButton} onClick={deleteTodoItem}>X</button>
                </td>
            </tr>
        </>
    )
}

export default TodoItem
