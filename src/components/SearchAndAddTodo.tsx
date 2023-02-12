import TodoForm from "./TodoForm";
import MyInput from "./UI/MyInput/MyInput";
import { FC } from "react"
import { SearchAndAddTodoProps } from "../types/components/SearchAndAddTodo";


const SearchAndAddTodo:FC<SearchAndAddTodoProps> = ({searchQuery, setsearchQuery}) => {
    return (
        <div className='to-do-list__search-and-add-todo'>
            <div className='to-do-list__search-query'>
                <MyInput 
                    value={searchQuery}
                    onChange={setsearchQuery}
                    placeholder='Type to search'
                    id='searchInput'
                    className='my-input-search-query'
                />
                <label htmlFor='searchInput' className='my-input-search-query__lable'></label>
            </div>
            <TodoForm />
        </div>
    );
};

export default SearchAndAddTodo;