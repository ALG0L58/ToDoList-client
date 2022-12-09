import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { filterTodoSlice } from "../store/reducers/FilterTodoSlice";
import MyButton from "./UI/MyButton/MyButton";


const TodoFilter = () => {
    const dispatch = useAppDispatch()
    const {todos} = useAppSelector(state => state.todoReducer)

    return (
        <div>
            <MyButton
                onHandler={() => {
                    dispatch(filterTodoSlice.actions.allTodos(todos))
                    dispatch(filterTodoSlice.actions.changeSelect('ALL'))
                }}
            >All
            </MyButton>

            <MyButton
                onHandler={() => {
                    dispatch(filterTodoSlice.actions.activeTodos(todos))
                    dispatch(filterTodoSlice.actions.changeSelect('ACTIVE'))
                }}
            >Active
            </MyButton>
            
            <MyButton
                onHandler={() => {
                    dispatch(filterTodoSlice.actions.doneTodos(todos))
                    dispatch(filterTodoSlice.actions.changeSelect('DONE'))
                }}
            >Done
            </MyButton>
        </div>
    );
};

export default TodoFilter;