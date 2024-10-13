import { configureStore} from "@reduxjs/toolkit";
import feedReducer from "./slices/feedSlice";

export const store = configureStore({
    reducer: {
        feedSlice: feedReducer,
        // Add the reducer here 
    }});