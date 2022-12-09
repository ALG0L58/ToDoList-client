import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../models/ITodo";

interface filterTodoState {
    filteredTodos: ITodo[]
    select: string
}

const initialState: filterTodoState = {
    filteredTodos: [],
    select: 'ALL'
}

export const filterTodoSlice = createSlice({
    name: "filterTodo",
    initialState,
    reducers: {
        allTodos(state, action: PayloadAction<ITodo[]>) {
            state.filteredTodos = action.payload
        },
        activeTodos(state, action: PayloadAction<ITodo[]>) {
            state.filteredTodos = action.payload.filter(todo => todo.completed == false)
        },
        doneTodos(state, action: PayloadAction<ITodo[]>) {
            state.filteredTodos = action.payload.filter(todo => todo.completed == true)
        }, 
        changeSelect(state, action: PayloadAction<string>) {
            state.select = action.payload
        }
    }
})

export default filterTodoSlice.reducer;