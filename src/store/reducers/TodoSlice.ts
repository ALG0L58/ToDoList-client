import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../models/ITodo";

interface TodoState {
    todos: ITodo[];
    isLoading: boolean;
    error: string;
}

const initialState: TodoState = {
    todos: [],
    isLoading: false,
    error: ''
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todosFetching(state) {
            state.isLoading = true;
        },
        todosFetchingSuccess(state, action: PayloadAction<ITodo[]>) {
            state.isLoading = false;
            state.error = '';
            state.todos = action.payload
        },
        Error(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        addTodo(state, action: PayloadAction<ITodo>) {
            state.todos.push(action.payload)
        },
        removeTodo(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter(todo => todo._id !== action.payload)
        },
        changeTodo(state, action: PayloadAction<number>) {
            const todo = state.todos.filter(todo => todo._id == action.payload)[0]
            todo.completed = !todo.completed
        }
    }
})

export default todoSlice.reducer;