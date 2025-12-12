import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export const messageSlice= createSlice({
    name:"message",
    initialState:"no error",
    reducers:{
        getMessage:(_, action :PayloadAction<string>)=>{
            return action.payload;
        }
    }
})
export const {getMessage}= messageSlice.actions
export default messageSlice.reducer
