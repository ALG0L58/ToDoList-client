import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../types/ITodo";
import { changeTodoActionProps, TodoState } from "../../types/reducers/TodoSlice";

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
        changeTodo: {
            reducer: (state, action: PayloadAction<changeTodoActionProps>) => {
                const todo = state.todos.filter(todo => todo._id == action.payload._id)[0]
                if(action.payload.select === "completed") {
                    todo.completed = action.payload.dataChangeTypeBoolean
                }
                if (action.payload.select === "title") {
                    todo.title = action.payload.dataChangeTypeString
                }
                if (action.payload.select === "important") {
                    todo.important = action.payload.dataChangeTypeBoolean
                }
            },
            prepare: (
                    _id: number,
                    select: string,
                    dataChangeTypeString: string, 
                    dataChangeTypeBoolean: boolean
                ) => {
                return {payload: {
                    _id, 
                    select,
                    dataChangeTypeString, 
                    dataChangeTypeBoolean
                }}
            }
        }
    }
})

export default todoSlice.reducer;