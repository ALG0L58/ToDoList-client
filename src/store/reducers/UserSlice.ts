import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserState } from "../../types/reducers/UserSlice";


const initialState: UserState = {
    currentUserId: '',
    isAuth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<string>) {
            state.currentUserId = action.payload
            state.isAuth = true
        }
    }
})

export default userSlice.reducer;