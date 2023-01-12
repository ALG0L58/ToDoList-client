import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { filterTodoSlice } from "../store/reducers/FilterTodoSlice";
import MyButton from "./UI/MyButton/MyButton";
import '../styles/App/components/TodoFilter/TodoFilter.css'


const TodoFilter = () => {
    const dispatch = useAppDispatch()
    const {todos} = useAppSelector(state => state.todoReducer)
    const {select} = useAppSelector(state => state.filterTodoReducer)

    return (
        <div className="to-do-list__filter filter">
            <div className="filter__content">
                <MyButton
                    onHandler={() => {
                        dispatch(filterTodoSlice.actions.getFilteredTodos(todos, "ALL", false))
                    }}
                    className={
                        select === "ALL"? 
                        "filter__button filter__button_active" : "filter__button"
                    }
                >All
                </MyButton>
                <MyButton
                    onHandler={() => {
                        dispatch(filterTodoSlice.actions.getFilteredTodos(todos, "ACTIVE", false))
                    }}
                    className={
                        select === "ACTIVE"? 
                        "filter__button filter__button_active" : "filter__button"
                    }
                >Active
                </MyButton>
                
                <MyButton
                    onHandler={() => {
                        dispatch(filterTodoSlice.actions.getFilteredTodos(todos, "DONE", true))
                    }}
                    className={
                        select === "DONE"? 
                        "filter__button filter__button_active" : "filter__button"
                    }
                >Done
                </MyButton>
            </div>
            
        </div>
    );
};

export default TodoFilter;