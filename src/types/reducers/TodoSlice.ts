import { ITodo } from "../ITodo";

export interface changeTodoActionProps {
    _id: string,
    select: string,
    dataChangeTypeString: string,
    dataChangeTypeBoolean: boolean,
}

export interface TodoState {
    todos: ITodo[];
    isLoading: boolean;
    error: string;
    version: number;
}

