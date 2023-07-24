import { useState, useEffect } from 'react';
import styles from './App.module.css';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/TodoContent/TodoContent';
import PageTitle from './components/PageTitle/PageTitle';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const todoItems = JSON.parse(localStorage.getItem('todoItems'));
    console.log("todo",todoItems);
    if (todoItems) {
     setTodoList(todoItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoList));
  }, [todoList]);

  const changeSearchText = (e) => {
    setSearchText(e.target.value);
  }

  return (
    <div className={styles.app}>
      <div className={styles.todoDiv}>
        <PageTitle>Todo App</PageTitle>
        <input type="text" onChange={changeSearchText} value={searchText} placeholder="Search ..." />
        <AddTodo todoList={todoList} setTodoList={setTodoList} />
        <Todos todoList={todoList} setTodoList={setTodoList} searchText={searchText} />
      </div>
    </div>
  );
}

export default App;
