import { useMemo } from "react";
import { ITodo } from "../models/ITodo";


export const useTodos = (todos: ITodo[], query: string) => {
    const selectedTodos = useMemo(() => {
        if(query) {
          return todos.filter(todo => todo.title.toLowerCase().includes(query.toLowerCase()))
        }
        return todos
        
    }, [query, todos])

    return selectedTodos
}