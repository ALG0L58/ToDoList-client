import { useEffect, useState } from 'react'
import TodoFilter from './components/TodoFilter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import MyInput from './components/UI/MyInput/MyInput';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { useRenderingTodos } from './hooks/useRenderingTodos';
import { useTodos } from './hooks/useTodos';
import { fetchTodos } from './store/reducers/ActionCreators';
import './styles/App/components/UI/MyInput//MyInput.css'
import './styles/App/App.css'


function App() {
  const dispatch = useAppDispatch()
  const {todos, isLoading, error} = useAppSelector(state => state.todoReducer)
  const {filteredTodos, select} = useAppSelector(state => state.filterTodoReducer)
  const [searchQuery, setsearchQuery] = useState<string>('')
  const selectedTodos = useTodos(filteredTodos, searchQuery)

  useEffect(() => {
    dispatch(fetchTodos())
  },[])

  useRenderingTodos(select, todos) 

  return (
    <div className='to-do-list'>
      <div className='to-do-list__content'>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        <div className='to-do-list__search-and-add-todo'>
          <div className='to-do-list__search-query'>
            <MyInput 
              value={searchQuery}
              onChange={e => setsearchQuery(e.target.value)}
              placeholder='Type to search'
              id='searchInput'
              className='my-input-search-query'
            />
            <label htmlFor='searchInput' className='my-input-search-query__lable'></label>
          </div>
          <TodoForm />
        </div>
        <hr className='vertical-line' />
        <TodoList todos={selectedTodos} />
      </div>
      <TodoFilter />
    </div>
  );
}

export default App;
