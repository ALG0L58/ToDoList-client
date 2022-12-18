import { useEffect, useState } from 'react'
import TodoFilter from './components/TodoFilter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import MyInput from './components/UI/MyInput/MyInput';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { useRenderingTodos } from './hooks/useRenderingTodos';
import { useTodos } from './hooks/useTodos';
import { fetchTodos } from './store/reducers/ActionCreators';

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
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <MyInput 
        value={searchQuery}
        onChange={e => setsearchQuery(e.target.value)}
        placeholder='type to search'
      />
      <TodoForm />
      <TodoList todos={selectedTodos} />
      <TodoFilter />
    </div>
  );
}

export default App;
