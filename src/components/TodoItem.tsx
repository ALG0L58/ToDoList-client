import { FC } from "react";
import MyButton from "./UI/MyButton/MyButton";

interface TodoItemProps {
    todo: {
        _id?: number
        title: string
        completed?: boolean
    }
}

const TodoItem:FC<TodoItemProps> = ({todo}) => {
    let {title, completed} = todo
    return (
        <div>
            -<span>{title}</span>
            <MyButton>+</MyButton>
            <div>
                <MyButton>change</MyButton>
                <MyButton>important</MyButton>
                <MyButton>remuve</MyButton>
            </div>
        </div>
    );
};

export default TodoItem;