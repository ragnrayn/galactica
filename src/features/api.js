import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: uuid(),
                text: action.payload,
            };

            state.push(todo);
        },
        deleteTodo: (state, action) => {
            state.slice(action.payload.index, 1);
        },
    }
});

// this is for dispatch
export const { addTodo, deleteTodo } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;