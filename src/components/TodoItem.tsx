import { FC } from "react";
import { useAppDispatch } from "../hooks/redux";
import { remuveTodo } from "../store/reducers/ActionCreators";
import MyButton from "./UI/MyButton/MyButton";

interface TodoItemProps {
    todo: {
        _id: number
        title: string
        completed?: boolean
    }
}

const TodoItem:FC<TodoItemProps> = ({todo}) => {
    const dispatch = useAppDispatch()

    const remuve = () => {
        dispatch(remuveTodo(title, _id))
    }

    let {title, completed, _id} = todo
    return (
        <div>
            -<span>{title}</span>
            <MyButton>+</MyButton>
            <div>
                <MyButton>change</MyButton>
                <MyButton>important</MyButton>
                <MyButton
                    onHandler={remuve}
                >remuve</MyButton>
            </div>
        </div>
    );
};

export default TodoItem;