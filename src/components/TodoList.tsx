import { FC } from "react";
import { ITodo } from "../models/ITodo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: ITodo[]
}

const TodoList: FC<TodoListProps> = ({todos}) => {
    return (
        <div>
            {todos.map(todo => 
                <TodoItem todo={todo} key={todo._id}/>
            )}
        </div>
    );
};

export default TodoList;