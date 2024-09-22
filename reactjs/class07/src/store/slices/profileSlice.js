import {createSlice} from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState:{
        isUserLoggedIn: false,
        user:{}
    },
    reducers:{
        login: (state, action) => {
            state.isUserLoggedIn = true
            state.user = action.payload
        },
        logout: (state) => {
            state.isUserLoggedIn = false
            state.user = {}
        }
    }
})

export const {login, logout} = profileSlice.actions
export default profileSlice.reducer