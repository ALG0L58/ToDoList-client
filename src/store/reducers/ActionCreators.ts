import { AppDispatch } from ".."
import { $host } from "../../http"
import { ITodo } from "../../types/ITodo"
import { IUser } from "../../types/IUser"
import { filterTodoSlice } from "./FilterTodoSlice"
import { todoSlice } from "./TodoSlice"
import { userSlice } from "./UserSlice"

export const registration = async (newUser: IUser) => {
    try {
        const response = await $host.post('api/registration', newUser)
        alert(response.data.message)
    } catch(e: any) {
        alert(e.response.data.message)
    }
}

export const auth = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.get('api/auth', 
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
        )
        dispatch(userSlice.actions.setUser(response.data.user.id))
        localStorage.setItem('token', response.data.token)
        
    } catch(e: any) {
        console.log(e.response.data.message)
        localStorage.removeItem('token')
    }
}

export const login = (newUser: IUser) => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.post('api/login', newUser)
        dispatch(userSlice.actions.setUser(response.data.user.id))
        localStorage.setItem('token', response.data.token)
    } catch(e: any) {
        alert(e.response.data.message)
    }
}




export const fetchTodos = (idUser: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(todoSlice.actions.todosFetching())
        const response = await $host.post<ITodo[]>('api/user/todos', {idUser})
        dispatch(todoSlice.actions.todosFetchingSuccess(response.data))
        dispatch(filterTodoSlice.actions.getFilteredTodos(response.data, "ALL"))
    } catch (e: any) {
        dispatch(todoSlice.actions.Error(e.message))
    }   
}

export const addTodo = (idUser: string, title: string, newTodo: ITodo) => async (dispatch: AppDispatch) => {
    try {
        await $host.post<ITodo[]>('api/user/addTodo', {idUser, title})
        dispatch(todoSlice.actions.addTodo(newTodo))
    } catch (e: any) {
        dispatch(todoSlice.actions.Error(e.message))
    }  
}

export const removeTodo = (idUser: string, idTodo: string) => async (dispatch: AppDispatch) => {
    try {
        await $host.post('api/user/removeTodo', {idUser, idTodo})
        dispatch(todoSlice.actions.removeTodo(idTodo))
    } catch (e: any) {
        dispatch(todoSlice.actions.Error(e.message))
    } 
}

export const changeTodo = (
    idUser: string,
    idTodo: string,
    select: string, 
    dataChangeTypeString: string, 
    dataChangeTypeBoolean: boolean) => async (dispatch: AppDispatch) => 
    {
    let dataChange;
    if(select === "title") {
        dataChange = dataChangeTypeString
    }
    if(select === "completed") {
        dataChange = dataChangeTypeBoolean
    }
    if(select === "important") {
        dataChange = dataChangeTypeBoolean
    }
    
    try {
        await $host.put<boolean | string>('api/user/changeTodo', {idUser, idTodo, dataChange, select})
        dispatch(todoSlice.actions.changeTodo(idTodo, select, dataChangeTypeString, dataChangeTypeBoolean))
    } catch (e: any) {
        dispatch(todoSlice.actions.Error(e.message))
    } 
}