import type { ThunkAction } from 'redux-thunk'
import { createMethod, getMethod ,deleteMethod} from '../untils'
import type { User } from '../untils'
import { getUser } from './userSlice'
import type { RootState } from './store'
import type { UnknownAction } from 'redux'
import { getMessage } from './messageSlice'
export const thunkGetUser=
  async (dispatch: any) => {
    const userList:User[]= await getMethod()
    dispatch(
        getUser(userList)
    )
  }
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