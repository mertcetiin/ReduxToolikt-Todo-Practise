import React from 'react'
import { handleSubmit } from '../control/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function Todo() {

    const { todos } = useSelector(state => state.todo)

    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState('');

    const handleTodoSubmit = (e) => {
        e.preventDefault()
        if (newTodo !== '') {
            dispatch(handleSubmit(newTodo))
            setNewTodo('');
        }
    };

    return (
        <div>
            <h1>Todo</h1>
            <hr />
            <br />
            <form onSubmit={handleTodoSubmit}>
                <input type="text" name='name' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Todo;