import React, { useState } from 'react';
import { Input, Button } from 'antd';

const TodoForm = (props) => {
    const [value, setvalue] = useState('');
    const { handleSubmit } = props;

    const onChange = (e) => {
        setvalue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const todo = {
            title: value,
        }
        if (todo.title) {
            handleSubmit(todo);
            setvalue('');
        }
        else {
            return;
        }
    }

    return (
        <form className="todo-form" onSubmit={onSubmit}>
            <Input className="todo-form__input" size="large" placeholder="Input a todo..." value={value} onChange={onChange} />
            <Button size="large" type="primary" onClick={onSubmit}>ADD</Button>
        </form>
    );
};

export default TodoForm;