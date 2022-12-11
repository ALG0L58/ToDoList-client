import { AppDispatch } from ".."
import { $host } from "../../http"
import { ITodo } from "../../models/ITodo"
import { filterTodoSlice } from "./FilterTodoSlice"
import { todoSlice } from "./TodoSlice"

export const fetchTodos = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(todoSlice.actions.todosFetching())
        const response = await $host.get<ITodo[]>('auth/allTodos')
        dispatch(todoSlice.actions.todosFetchingSuccess(response.data))
        dispatch(filterTodoSlice.actions.allTodos(response.data))
    } catch (e: any) {
        dispatch(todoSlice.actions.Error(e.message))
    }   
}

export const addTodo = (title: string, newTodo: ITodo) => async (dispatch: AppDispatch) => {
    try {
        await $host.post<ITodo[]>('auth/addTodo', {title})
        dispatch(todoSlice.actions.addTodo(newTodo))
    } catch (e: any) {
        dispatch(todoSlice.actions.Error(e.message))
    }  
}

export const removeTodo = (title: string, _id: number) => async (dispatch: AppDispatch) => {
    try {
        await $host.post<number>('auth/remuveTodo', {title})
        dispatch(todoSlice.actions.removeTodo(_id))
    } catch (e: any) {
        dispatch(todoSlice.actions.Error(e.message))
    } 
}

export const changeTodo = (title: string, completed: boolean, _id: number) => async (dispatch: AppDispatch) => {
    try {
        await $host.post<boolean>('auth/changeTodo', {title, completed})
        dispatch(todoSlice.actions.changeTodo(_id))
    } catch (e: any) {
        dispatch(todoSlice.actions.Error(e.message))
    } 
}