import { AppDispatch } from ".."
import { $host } from "../../http"
import { ITodo } from "../../types/ITodo"
import { filterTodoSlice } from "./FilterTodoSlice"
import { todoSlice } from "./TodoSlice"

export const fetchTodos = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(todoSlice.actions.todosFetching())
        const response = await $host.get<ITodo[]>('auth/allTodos')
        dispatch(todoSlice.actions.todosFetchingSuccess(response.data))
        dispatch(filterTodoSlice.actions.getFilteredTodos(response.data, "ALL"))
    } catch (e: any) {
        dispatch(todoSlice.actions.Error(e.message))
    }   
}

export const addTodo = (title: string, newTodo: ITodo) => async (dispatch: AppDispatch) => {
    try {
        // await $host.post<ITodo[]>('auth/addTodo', {title})
        dispatch(todoSlice.actions.addTodo(newTodo))
    } catch (e: any) {
        dispatch(todoSlice.actions.Error(e.message))
    }  
}

export const removeTodo = (title: string, _id: number) => async (dispatch: AppDispatch) => {
    try {
        // await $host.post<number>('auth/remuveTodo', {title})
        dispatch(todoSlice.actions.removeTodo(_id))
    } catch (e: any) {
        dispatch(todoSlice.actions.Error(e.message))
    } 
}

export const changeTodo = (
    _id: number,
    title: string,
    select: string, 
    dataChangeTypeString: string, 
    dataChangeTypeBoolean: boolean) => async (dispatch: AppDispatch) => 
    {
    let dataChange;
    if(select === "title") {
        dataChange = dataChangeTypeString
    }
    if(select === "completed") {
        dataChange = dataChangeTypeBoolean
    }
    
    try {
        // await $host.post<boolean>('auth/changeTodo', {title, dataChange, select})
        dispatch(todoSlice.actions.changeTodo(_id, select, dataChangeTypeString, dataChangeTypeBoolean))
    } catch (e: any) {
        dispatch(todoSlice.actions.Error(e.message))
    } 
}