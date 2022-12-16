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
                    dispatch(filterTodoSlice.actions.getFilteredTodos(todos, "ALL", false))
                }}
            >All
            </MyButton>

            <MyButton
                onHandler={() => {
                    dispatch(filterTodoSlice.actions.getFilteredTodos(todos, "ACTIVE", false))
                }}
            >Active
            </MyButton>
            
            <MyButton
                onHandler={() => {
                    dispatch(filterTodoSlice.actions.getFilteredTodos(todos, "DONE", true))
                }}
            >Done
            </MyButton>
        </div>
    );
};

export default TodoFilter;