import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from '../untils'
import { fetchUser } from './thunk'
const initialState: {
  error: any,
  userList: User[],
  status:string//"complete" || "fending"|| "failed"|| "idle"
}= {
  error: "",
  userList: [],
  status: "idle"
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers:{
    getUser: ()=>{

    }
  },
  extraReducers:(builder)=>{
    builder
    .addAsyncThunk(fetchUser,{
      fulfilled:(state, action)=>{
        state.error= "",
        state.userList= action.payload,
        state.status="complete"
      },
      pending:(state)=>{
        state.status="pending"
      },
      rejected:(state, action)=>{
        state.error= action.payload|| "unknown error"
        state.userList = []
        state.status= "failed"
      }  
    })
  },
  selectors:{
    selectUserList:(state)=>state

  }
 }
)

export const { getUser} = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const {selectUserList } = userSlice.selectors;
export default userSlice.reducer
