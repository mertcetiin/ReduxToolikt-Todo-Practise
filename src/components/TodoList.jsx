import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleDelete } from '../control/todoSlice';

function TodoList({ setTodos }) {

    const { todos } = useSelector(state => state.todo)

    const dispatch = useDispatch()

    const [editTodo, setEditTodo] = useState('');
    const [editTodoIndex, setEditTodoIndex] = useState(-1);

    const handleEdit = (index) => {
        setEditTodoIndex(index)
        setEditTodo(todos[index]);
        setEditTodo('');
    };

    const handleSaveTodo = (index) => {
        const updatedTodo = [...todos];
        updatedTodo[index] = editTodo;
        setEditTodoIndex(-1);
        setTodos(updatedTodo)
    };

    return (
        <div>
            {todos.map((item, id) => (
                <div key={id}>
                    <p>{item}</p>
                    {editTodoIndex === id ? (
                        <form>
                            <input type="text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
                            <button onClick={() => handleSaveTodo(id)}>Save</button>
                        </form>
                    ) : (
                        <div>
                            <button onClick={() => handleEdit(id)}>Edit</button>
                            <button onClick={() => dispatch(handleDelete())}>Delete</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default TodoList;