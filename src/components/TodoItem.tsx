import { FC } from "react";
import { useAppDispatch } from "../hooks/redux";
import { changeTodo, removeTodo } from "../store/reducers/ActionCreators";
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
        dispatch(removeTodo(title, _id))
    }

    let {title, completed, _id} = todo
    return (
        <div>
             -<span
                onClick={() => dispatch(changeTodo(title, !completed, _id))}
            >{title}</span>
            <MyButton>+</MyButton>
            <div>
                <MyButton
                    
                >change
                </MyButton>

                <MyButton>important</MyButton>

                <MyButton
                    onHandler={remuve}
                >remove
                </MyButton>
            </div>
        </div>
    );
};

export default TodoItem;