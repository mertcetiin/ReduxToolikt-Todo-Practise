import React from 'react'
import { useState } from 'react';

function TodoList({ todos, handleDelete, setTodos }) {

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
                            <button onClick={() => handleDelete(id)}>Delete</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default TodoList;