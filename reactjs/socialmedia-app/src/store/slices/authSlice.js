// authSlice
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from "../../config/firebase";
import { addDoc ,doc, collection, getDoc, setDoc} from "firebase/firestore";


export const getCurrentUser = createAsyncThunk(
    "auth/currentUser",
    async ()=>{
        try {
            const user = auth.currentUser;
            if (user) {
                return user
            }
         
        } catch (error) {
            
        }
         
    }
)

export const logout= createAsyncThunk(
    "auth/logout",
    async ()=>{
        try {
            await signOut(auth)
            return true
        } catch (error) {
            console.log(error);
            
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (user) => {

        try {
            console.log("user",user);
            
         const userCredential =   await signInWithEmailAndPassword(auth, user.email, user.password)
         console.log("userCredential in login",userCredential.user.uid);
         
         const docSnap = await getDoc(doc(db, "users",userCredential.user.uid))
         const dbUser = docSnap?.data()
         console.log("dbUser",dbUser);
         
         return dbUser


        } catch (error) {
             console.log("error",error);
             
        }
        
    }
)

export const signup = createAsyncThunk(
    'auth/signup',
    async (user) => {
        try {
           const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)
            
           let saveUserTodb = {
                email: user.email,
                name: user.name,
                phone: user.phone,
                address: user.address,
                gender: user.gender,
                uid: userCredential.user.uid
           }

           await setDoc(doc(db, "users", userCredential.user.uid ), saveUserTodb)
            return  saveUserTodb
            
        } catch (error) {
            console.log("error", error);
            
        }
      
    }
)

const initialState = {
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
extraReducers:(builder)=>{
    builder.addCase(signup.fulfilled, (state,action)=>{
        console.log("action", action.payload);
        state.user = action.payload
    })

    builder.addCase(login.fulfilled, (state,action)=>{
        console.log("action in login", action.payload);
        state.user = action.payload
    })

    builder.addCase(logout.fulfilled, (state,action)=>{
        console.log("action in login", action.payload);
        state.user = null
    })

    builder.addCase(getCurrentUser.fulfilled, (state,action)=>{
        console.log("action in login", action.payload);
        state.user = action.payload
    })
}
});

export const { setUser } = authSlice.actions
export default authSlice.reducer