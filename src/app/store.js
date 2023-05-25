import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/api";

export default configureStore({
    reducer: {
        todos: todoReducer
    }
})