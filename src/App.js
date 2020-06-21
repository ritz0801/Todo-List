import React, { useState } from 'react';
import './style/index.scss';
import "antd/dist/antd.css";
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  const todoStorage = JSON.parse(localStorage.getItem("todoList"));
  const [todoList, setTodoList] = useState(todoStorage ? todoStorage : []);

  const handleSubmit = (todo) => {
    const newTodo = [...todoList];
    newTodo.unshift(todo);
    setTodoList(newTodo);
    localStorage.setItem("todoList", JSON.stringify(newTodo));
  }

  const handleRemove = (todo) => {
    let newTodo = [...todoList];
    newTodo = newTodo.filter((item) => {
      return item.title.toLowerCase() !== todo.title.toLowerCase();
    })
    setTodoList(newTodo);
    localStorage.setItem("todoList", JSON.stringify(newTodo));
  }

  return (
    <div style={{ textAlign: 'center' }} className="App">
      <h1>Todo List</h1>
      <TodoForm handleSubmit={handleSubmit} />
      <TodoList todoList={todoList} handleRemove={handleRemove} />
    </div>
  );
}

export default App;
