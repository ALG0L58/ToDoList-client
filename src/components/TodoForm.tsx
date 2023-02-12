import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ITodo } from "../types/ITodo";
import { addTodo } from '../store/reducers/ActionCreators';
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import '../styles/App/components/TodoForm/TodoForm.css'

const TodoForm:FC = () => {
    const [title, setTitle] = useState<string>('')
    const {currentUserId} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    const addNewTodo = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()

        if (title.length < 5) {
            console.log('title length < 5');
        } else {
            const newTodo: ITodo = {
                _id: String(Date.now()),
                title: title,
                completed: false,
                important: false,
            }
            dispatch(addTodo(currentUserId, title, newTodo))
            setTitle('')
        }
    }

    return (
        <form className='to-do-list__form'>
            <MyInput 
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder='Add todo'
                className='my-input-add-todo'
            />
            <MyButton
                onHandler={e => addNewTodo(e)}
                className='to-do-list__button-form'
            />
        </form>
    );
};

export default TodoForm;