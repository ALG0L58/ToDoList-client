import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { changeTodo, removeTodo } from "../store/reducers/ActionCreators";
import { TodoItemProps } from "../types/components/TodoItem";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import '../styles/App/components/TodoItem/TodoItem.css'

const TodoItem:FC<TodoItemProps> = ({todo}) => {
    const {title, completed, important, _id} = todo
    const {currentUserId} = useAppSelector(state => state.userReducer)
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

    const preChangeTodo = (select: string, dataChangeTypeString: string, dataChangeTypeBoolean: boolean) => {
        dispatch(changeTodo(currentUserId, _id, select, dataChangeTypeString, dataChangeTypeBoolean))
    }

    const changeCurrentTitle = (e:React.KeyboardEvent<HTMLInputElement>): void => {
        const keyName = e.key

        if (keyName === 'Enter') {
            preChangeTodo("title", changeTitle, false)
            setChangeTile("")
            setVisibleInput(false)
            setVisibleMenu(!visibleMenu)
        }
    }

    const currentTitle = <span
        onClick={() => preChangeTodo("completed", '', !completed)}
        className={className}
    >{title}</span>

    const changeInput = <MyInput 
        value={changeTitle}
        onChange={e => setChangeTile(e.target.value)}
        onKeyUp={e => changeCurrentTitle(e)}
        placeholder="Change todo name"
        className="my-input-change-title"
    />

    return (
        <div className="to-do-list__task task">
            {visibleInput
            ? 
                changeInput
            :
                <>-{currentTitle}</>
            }
            <MyButton 
                className={!visibleMenu
                    ? 
                        'task__open-menu-button_visible' 
                    : 
                        'task__open-menu-button_invisible'}
                onHandler={() => setVisibleMenu(!visibleMenu)}
            />
            <div className={visibleMenu
                ? 
                    'task__menu_visible' 
                : 
                    'task__menu_invisible'}>

                <MyButton
                    onHandler={() => setVisibleInput(!visibleInput)}
                    className='task__change-button'
                />

                <MyButton 
                    onHandler={() => 
                        {
                            preChangeTodo("important", '', !important)
                            setVisibleMenu(!visibleMenu)
                        }
                    }
                    className='task__important-button'
                />

                <MyButton
                    onHandler={() => dispatch(removeTodo(currentUserId, _id))}
                    className='task__remove-button'
                />
            </div>
        </div>
    );
};

export default TodoItem;