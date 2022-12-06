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
        dispatch(todoSlise.actions.todosFetchingError(e.message))
    }
    
}