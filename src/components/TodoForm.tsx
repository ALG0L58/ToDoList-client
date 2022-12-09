import { useState } from 'react';
import { useAppDispatch } from "../hooks/redux";
import { ITodo } from "../models/ITodo";
import { addTodo } from '../store/reducers/ActionCreators';
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const TodoForm = () => {
    const [title, setTitle] = useState<string>('')
    const dispatch = useAppDispatch()

    const addNewTodo = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        
        const newTodo: ITodo = {
            _id: Date.now(),
            title: title,
            completed: false
        }
        dispatch(addTodo(title, newTodo))
        setTitle('')
    }

    return (
        <form>
            <MyInput 
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder='Add todo'
            />
            <MyButton
                onHandler={e => addNewTodo(e)}
            >add todo</MyButton>
        </form>
    );
};

export default TodoForm;