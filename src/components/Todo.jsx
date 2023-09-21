import React from 'react'

function Todo({ handleSubmit }) {

    return (
        <div>
            <h1>Todo</h1>
            <hr />
            <br />
            <form onSubmit={handleSubmit} >
                <input type="text" name='name' />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Todo;