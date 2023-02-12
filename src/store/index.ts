import {combineReducers, configureStore} from '@reduxjs/toolkit'
import todoReducer from './reducers/TodoSlice'
import filterTodoReducer from './reducers/FilterTodoSlice'
import userReducer from './reducers/UserSlice'

const rootReducer = combineReducers({
    todoReducer,
    filterTodoReducer,
    userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']