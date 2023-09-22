import React from 'react'

function TodoList({ todos, handleDelete }) {
    return (

        <div>
            {todos.map((item, id) => (
                <div key={id}>
                    <p>{item}</p>
                    <button>Edit</button>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList;