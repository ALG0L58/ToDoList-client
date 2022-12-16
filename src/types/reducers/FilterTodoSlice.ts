import { ITodo } from "../ITodo"

export interface getFilteredTodosActionProps {
    todos: ITodo[],
    select: string,
    dataChange?: boolean
}

export interface filterTodoState {
    filteredTodos: ITodo[]
    select: string
}