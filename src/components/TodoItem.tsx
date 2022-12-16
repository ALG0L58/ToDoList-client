import { FC, useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { changeTodo, removeTodo } from "../store/reducers/ActionCreators";
import { TodoItemProps } from "../types/components/TodoItem";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const TodoItem:FC<TodoItemProps> = ({todo}) => {
    const {title, completed, _id} = todo
    const [visibleInput, setVisibleInput] = useState<boolean>(false)
    const [changeTitle, setChangeTile] = useState<string>("")
    const dispatch = useAppDispatch()

    const changeCurrentTitle = () => {
        dispatch(changeTodo(_id, title, "title", changeTitle, false))
        setChangeTile("")
        setVisibleInput(false)
    }

    const currentTitle = <span
        onClick={() => dispatch(changeTodo(_id, title, "completed", "", !completed))}
    >{title}</span>

    const changeInput = <MyInput 
        value={changeTitle}
        onChange={e => setChangeTile(e.target.value)}
        onBlur={changeCurrentTitle}
        placeholder="change todo name"
    />

    return (
        <div>
            {visibleInput? 
                changeInput
            :
                <>-{currentTitle}</>
            }
            <MyButton>+</MyButton>
            <div>
                <MyButton
                    onHandler={() => setVisibleInput(!visibleInput)}
                >change
                </MyButton>

                <MyButton>important</MyButton>

                <MyButton
                    onHandler={() => dispatch(removeTodo(title, _id))}
                >remove
                </MyButton>
            </div>
        </div>
    );
};

export default TodoItem;