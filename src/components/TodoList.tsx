import { FC } from "react";
import { TodoListProps } from "../types/components/TodoList";
import TodoItem from "./TodoItem";
import '../styles/App/components/TodoList/TodoList.css'

const TodoList: FC<TodoListProps> = ({todos}) => {
    return (
        <div className="to-do-list__tasks">
            {todos.map(todo => 
                <TodoItem todo={todo} key={todo._id}/>
            )}
        </div>
    );
};

export default TodoList;