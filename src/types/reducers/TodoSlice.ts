import { ITodo } from "../ITodo";

export interface changeTodoActionProps {
    _id: number,
    select: string,
    dataChangeTypeString: string,
    dataChangeTypeBoolean: boolean,
}

export interface TodoState {
    todos: ITodo[];
    isLoading: boolean;
    error: string;
}

