import { configureStore} from "@reduxjs/toolkit";
import feedReducer from "./slices/feedSlice";
import authReducer from "./slices/authSlice";
// Add the reducer here


export const store = configureStore({
    reducer: {
        feedSlice: feedReducer,
        authSlice: authReducer
        // Add the reducer here 
    }});