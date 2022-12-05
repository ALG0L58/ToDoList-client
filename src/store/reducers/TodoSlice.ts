import { createSlice } from "@reduxjs/toolkit";
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

export const todoSlise = createSlice({
    name: 'todo',
    initialState,
    reducers: {

    }
})

export default todoSlise.reducer;