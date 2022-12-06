import { FC } from "react";
import TodoItem from "./TodoItem";

interface TodoListType {
    _id: number
    title: string
    completed: boolean
}

interface TodoListProps {
    todos: Array<TodoListType>
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