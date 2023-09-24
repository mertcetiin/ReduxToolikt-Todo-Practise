import React from 'react'

function Todo() {

    return (
        <div>
            <h1>Todo</h1>
            <hr />
            <br />
            <form >
                <input type="text" name='name' />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Todo;