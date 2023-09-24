import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        handleDelete: (state, action) => {
            const updateDelete = state.filter((item, id) => id !== index)
            setTodos(updateDelete)
        },

    },
})

export const { handleDelete } = todoSlice.actions

export default todoSlice.reducer