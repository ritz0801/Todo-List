import React from 'react';
import { Button } from 'antd';

const TodoItem = (props) => {
    const { todo, handleRemove } = props;
    return (
        <li className="todo-item" onClick={() => { handleRemove(todo) }}>
            {todo.title}
            <Button className="todo-item__btnRemove" onClick={() => { handleRemove(todo) }}>Remove</Button>
        </li>
    );
};

export default TodoItem;