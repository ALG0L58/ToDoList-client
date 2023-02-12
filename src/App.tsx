import { useEffect, useState } from 'react'
import TodoFilter from './components/TodoFilter';
import Registration from './components/Registration';
import TodoList from './components/TodoList';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { useRenderingTodos } from './hooks/useRenderingTodos';
import { useTodos } from './hooks/useTodos';
import { auth, fetchTodos } from './store/reducers/ActionCreators';
import './styles/App/components/UI/MyInput/MyInput.css'
import './styles/App/App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Notfoundpage from './components/Notfoundpage';
import Loading from './components/UI/Loading';
import SearchAndAddTodo from './components/SearchAndAddTodo';



function App() {
  const dispatch = useAppDispatch()
  const {todos, isLoading, error, version} = useAppSelector(state => state.todoReducer)
  const {filteredTodos, select} = useAppSelector(state => state.filterTodoReducer)
  const {isAuth, currentUserId} = useAppSelector(state => state.userReducer)
  const [searchQuery, setsearchQuery] = useState<string>('')
  const selectedTodos = useTodos(filteredTodos, searchQuery)

  useEffect (() => {
    dispatch(auth())
  })
  
  useEffect(() => {
    if (isAuth) {
      dispatch(fetchTodos(currentUserId))
    }
  },[isAuth, version])
  
  useRenderingTodos(select, todos) 

  
  const userTasks = 
  <div className='to-do-list'>
    <div className='to-do-list__content'>
      <SearchAndAddTodo
        searchQuery={searchQuery}
        setsearchQuery={e => setsearchQuery(e.target.value)}
      />
      {error && <h1 style={{color: 'red'}}>{error}</h1>}
      {isLoading && <Loading />}
      <hr className='vertical-line' />
      <TodoList todos={selectedTodos} />
    </div>
    <TodoFilter />
  </div>


  return (
    <BrowserRouter>
      <>
        {isAuth 
        ?
          userTasks
        :
          <Routes>
            <Route path='/registration' element={<Registration />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='*' element={<Notfoundpage />}/>
          </Routes>
        }
      </>
    </BrowserRouter>
  );
}

export default App;
