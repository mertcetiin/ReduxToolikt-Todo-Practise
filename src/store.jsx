import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./control/todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
})