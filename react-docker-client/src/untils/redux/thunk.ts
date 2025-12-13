import type { ThunkAction } from 'redux-thunk'
import { createMethod, deleteMethod } from '../untils'
import type { User } from '../untils'
import type { RootState } from './store'
import type { UnknownAction } from 'redux'
import { getMessage } from './messageSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../axios'
export const thunkCreateUser= 
  (newUser: User): ThunkAction<void, RootState, unknown, UnknownAction>=>
    async (dispatch)=>{
      const result= await createMethod(newUser)    
      dispatch (
        getMessage(result)
      )
    } 
export const thunkDeleteUser=
    (id: number): ThunkAction<void, RootState, unknown, UnknownAction>=>
    async (dispatch)=>{
      const result=await deleteMethod(id)
      dispatch (
        getMessage(result)
      )
    } 

export const fetchUser= createAsyncThunk(
  'users/fetchUsers',
  async (_,{rejectWithValue})=>{
    try{
      const res= await api.get("/user");
      return res.data.users;
    }catch(error: any){
      return rejectWithValue(error.response.data.message);
    }
  }
)
export const createUser= createAsyncThunk(
  'users/createUsers',
  async (newUser: User)=>{
    try{
     const newMessage: string= await createMethod(newUser);
     return newMessage;
    }catch(e:any){
      return e.response;
    }
  }
)
export const deleteUser= createAsyncThunk(
  'users/deleteUsers',
  async (id: number)=>{
    try{
     const newMessage: string= await deleteMethod(id);
     return newMessage;
    }catch(e:any){
      return e.response;
    }
  }
)