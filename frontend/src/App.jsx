import { useState } from 'react'
import DispStudent from './components/DispStudent'
import AddStudent from './components/AddStudent'

function App() {

  return (
    <div className='bg-orange-300 p-4'>
      <AddStudent />
      <DispStudent />
    </div>
  )
}

export default App
