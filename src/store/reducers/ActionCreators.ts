import { AppDispatch } from ".."
import { $host } from "../../http"
import { ITodo } from "../../models/ITodo"
import { todoSlise } from "./TodoSlice"

export const fetchTodos = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(todoSlise.actions.todosFetching())
        const response = await $host.get<ITodo[]>('auth/allTodos')
        dispatch(todoSlise.actions.todosFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(todoSlise.actions.Error(e.message))
    }   
}

export const addTodo = (title: string, newTodo: ITodo) => async (dispatch: AppDispatch) => {
    try {
        await $host.post<ITodo[]>('auth/addTodo', {title})
        dispatch(todoSlise.actions.addTodo(newTodo))
    } catch (e: any) {
        dispatch(todoSlise.actions.Error(e.message))
    }  
}

export const remuveTodo = (title: string, _id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(todoSlise.actions.remuveTodo(_id))
        await $host.post<number>('auth/remuveTodo', {title})
        
    } catch (e: any) {
        dispatch(todoSlise.actions.Error(e.message))
    } 
}