import { FC } from "react";
import { TodoListProps } from "../types/components/TodoList";
import TodoItem from "./TodoItem";

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