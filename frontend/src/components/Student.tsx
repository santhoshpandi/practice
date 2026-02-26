import type { Student } from '../types/student'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store/store'
import { deleteStudent } from '../features/studentSlice'

interface Props{
  student:Student
}

function Student({student}:Props) {

  const dispatch = useDispatch<AppDispatch>()

  return (
    <tr>
      <td className="px-2 py-1 border">{student._id}</td>
      <td className="px-2 py-1 border">{student.name}</td>
      <td className="px-2 py-1 border">{student.age}</td>
      <td className="px-2 py-1 border">
        <button
        className='bg-amber-900 text-white px-2 py-1'
        onClick={()=>dispatch(deleteStudent(student._id))}
        >Delete</button>
      </td>
    </tr>
  )
}

export default Student