import React from 'react'

function TodoList({ todos }) {
    return (

        <div>
            {todos.map((item, id) => (
                <div key={id}>
                    <p>{item}</p>
                </div>
            ))}
        </div>
    )
}

export default TodoList;