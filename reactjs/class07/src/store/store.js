import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './slices/counterSlice'
import profileReducer from './slices/profileSlice'


export const store = configureStore({
    reducer: {
        counterReducer,
        profileReducer,

    }
})