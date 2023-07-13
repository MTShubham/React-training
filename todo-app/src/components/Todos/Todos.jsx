import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import styles from './Todos.module.css'

const Todos = ({ todoList, setTodoList, searchText }) => {
    let filteredList;
    searchText === "" ? (filteredList = todoList) : (filteredList = todoList.filter(todoItem => todoItem.text.includes(searchText)));

    return (
        <table className={styles.table}>
            <tbody>
                {filteredList?.map(todoItem => {
                    return <TodoItem todo={todoItem} key={todoItem.createdTime} todoList={todoList} setTodoList={setTodoList} />
                })}

                {!todoList.length && (
                    <tr>
                        <td>
                            <h4>There is no todo item in your list at present.</h4>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Todos
