import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import styles from './TodoContent.module.css'

const Todos = ({ todoList, setTodoList, searchText }) => {
    let filteredList;
    searchText === "" ? (filteredList = todoList) : (filteredList = todoList.filter(todoItem => todoItem.text.includes(searchText)));

    return (
        <>
            {filteredList.length > 0 ? (
                <div className={styles.todoContent}>
                    {filteredList?.map(todoItem => {
                        return <TodoItem todo={todoItem} key={todoItem.createdTime} todoList={todoList} setTodoList={setTodoList} />
                    })}

                    {!todoList.length && (
                        <h4>There is no todo item in your list at present.</h4>
                    )}
                </div>)
                : (<h3>No matched item</h3>)
            }
        </>
    )
}

export default Todos
