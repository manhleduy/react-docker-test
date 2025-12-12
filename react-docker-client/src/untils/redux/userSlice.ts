import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { User } from '../untils'

const initialState: User[] =[]

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers:{
    getUser: state=>{
    
    },
    deleteUser:(state, action: PayloadAction<number>)=>{
        const chosenId= action.payload;
        return state.filter((_,index)=>index!== chosenId);
    },
    createUser:(state, action:PayloadAction<User>)=>{   
        return [...state, action.payload];
    }
  }
})

export const { getUser, deleteUser, createUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const userList = (state: RootState) => state.user

export default userSlice.reducer
