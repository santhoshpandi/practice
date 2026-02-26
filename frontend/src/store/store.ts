import {configureStore} from '@reduxjs/toolkit'
import studentReducer from '../features/studentSlice'

const store = configureStore({
  devTools:true,
  reducer:{
    studentReducer
  }
})

export default store