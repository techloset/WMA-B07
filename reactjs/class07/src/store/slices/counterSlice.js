import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 5,
        email: "abc@g.com",
        students: []
    },
    reducers:{
        increament: (state) => {
            state.count = state.count + 1
            state.email = Math.random()
        },
        decreament: (state) => {
            state.count = state.count - 1
        },
    }
})

export const { increament, decreament } = counterSlice.actions

export default counterSlice.reducer


// const fetchUserById = createAsyncThunk(
//     'users/fetchById',
//     // Declare the type your function argument here:
//     async (userId) => {
//       const response = await fetch(`https://reqres.in/api/users/${userId}`)
//       // Inferred return type: Promise<MyData>
//       return (await response.json())
//     },
//   )