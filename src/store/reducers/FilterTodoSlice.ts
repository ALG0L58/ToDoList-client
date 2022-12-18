import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../types/ITodo";
import { filterTodoState, getFilteredTodosActionProps } from "../../types/reducers/FilterTodoSlice";

const initialState: filterTodoState = {
    filteredTodos: [],
    select: 'ALL'
}

export const filterTodoSlice = createSlice({
    name: "filterTodo",  
    initialState,
    reducers: {
        getFilteredTodos: {
            reducer: (state, action: PayloadAction<getFilteredTodosActionProps>) => {
                const FilteredTodos = () => {
                    state.filteredTodos = action.payload.todos.filter(todo => todo.completed == action.payload.dataChange)
                }

                state.select = action.payload.select
                if (action.payload.select === "ALL") {
                    state.filteredTodos = action.payload.todos
                }
                if (action.payload.select === "ACTIVE") {
                    FilteredTodos()
                }
                if (action.payload.select === "DONE") {
                    FilteredTodos()
                }
            },
            prepare: (
                    todos: ITodo[],
                    select: string,
                    dataChange?: boolean
                ) => {
                return {payload: {
                    todos,
                    select,
                    dataChange
                }}
            },
        }
    }
})

export default filterTodoSlice.reducer;