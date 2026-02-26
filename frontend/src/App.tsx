import DispStudent from './components/DispStudent'
import AddStudent from './components/AddStudent'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {type AppDispatch, type RootState } from './store/store'
import toast from 'react-hot-toast'
import { clearError } from './features/studentSlice'

function App() {

  const error = useSelector((state:RootState)=>state.student.error)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=>{
    if(error) toast.error(error)
      dispatch(clearError())
  },[error])

  return (
    <div className='bg-orange-300 p-4 min-h-screen'>
      <AddStudent />
      <DispStudent />
    </div>
  )
}

export default App
