import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = (props) => {
    const { todoList, handleRemove } = props;
    const renderTodoList = (todoList) => {
        return todoList.map((todo, index) => {
            return <TodoItem todo={todo} key={index} handleRemove={handleRemove} />
        })
    }

    return (
        <ul>
            {renderTodoList(todoList)}
        </ul>
    );
};

export default TodoList;