import {configureStore} from '@reduxjs/toolkit'
import studentReducer from '../features/studentSlice'

const store = configureStore({
  devTools:true,
  reducer:{
    student:studentReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store