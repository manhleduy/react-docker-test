
import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import messageReducer from "./messageSlice"
const loggerMiddleware = (store:any) => (next:any) => (action:any) => {
  console.log('Dispatching:', action.type);
  const result = next(action); // Pass the action to the next middleware/reducer
  console.log('New state:', store.getState());
  return result;
};
export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(loggerMiddleware)
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']