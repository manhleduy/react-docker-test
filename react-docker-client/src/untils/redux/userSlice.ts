import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { User } from '../untils'

const initialState: User[] =[]

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers:{
    getUser: (_, action: PayloadAction<User[]>)=>{
        return action.payload;
    }
  }
})

export const { getUser} = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const userlist = (state: RootState) => state.user;

export default userSlice.reducer
