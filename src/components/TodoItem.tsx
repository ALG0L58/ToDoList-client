import { FC, useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { changeTodo, removeTodo } from "../store/reducers/ActionCreators";
import { TodoItemProps } from "../types/components/TodoItem";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import '../styles/App/components/TodoItem/TodoItem.css'

const TodoItem:FC<TodoItemProps> = ({todo}) => {
    const {title, completed, important, _id} = todo
    const [visibleMenu, setVisibleMenu] = useState<boolean>(false)
    const [visibleInput, setVisibleInput] = useState<boolean>(false)
    const [changeTitle, setChangeTile] = useState<string>("")
    const dispatch = useAppDispatch()

    let className: string = "task__title"

    if (completed) {
        className += " task__title_completed"
    }
    if (important) {
        className += " task__title_important"
    }

    const changeCurrentTitle = () => {
        dispatch(changeTodo(_id, title, "title", changeTitle, false))
        setChangeTile("")
        setVisibleInput(false)
        setVisibleMenu(!visibleMenu)
    }

    const currentTitle = <span
        onClick={() => dispatch(changeTodo(_id, title, "completed", "", !completed))}
        className={className}
    >{title}</span>

    const changeInput = <MyInput 
        value={changeTitle}
        onChange={e => setChangeTile(e.target.value)}
        onBlur={changeCurrentTitle}
        placeholder="Change todo name"
        className="my-input-change-title"
    />

    return (
        <div className="to-do-list__task task">
            {visibleInput? 
                changeInput
            :
                <>-{currentTitle}</>
            }
            <MyButton 
                className={!visibleMenu? 
                    'task__open-menu-button_visible' : 
                    'task__open-menu-button_invisible'}
                onHandler={() => setVisibleMenu(!visibleMenu)}
            />
            <div className={visibleMenu? 
                'task__menu_visible' : 
                'task__menu_invisible'}>

                <MyButton
                    onHandler={() => setVisibleInput(!visibleInput)}
                    className='task__change-button'
                />

                <MyButton 
                    onHandler={() => 
                        {
                            dispatch(changeTodo(_id, title, "important", "", !important))
                            setVisibleMenu(!visibleMenu)
                        }
                    }
                    className='task__important-button'
                />

                <MyButton
                    onHandler={() => dispatch(removeTodo(title, _id))}
                    className='task__remove-button'
                />
            </div>
        </div>
    );
};

export default TodoItem;