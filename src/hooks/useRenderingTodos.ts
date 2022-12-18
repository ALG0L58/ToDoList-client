import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { filterTodoSlice } from "../store/reducers/FilterTodoSlice"
import { ITodo } from "../types/ITodo"

export const useRenderingTodos = (select: string, todos: ITodo[]) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if(select == "ALL") {
          dispatch(filterTodoSlice.actions.getFilteredTodos(todos, "ALL"))
        }
        if(select == "ACTIVE") {
          dispatch(filterTodoSlice.actions.getFilteredTodos(todos, "ACTIVE", false))
        }
        if(select == "DONE") {
          dispatch(filterTodoSlice.actions.getFilteredTodos(todos, "DONE", true))
        }
    },[todos])
}