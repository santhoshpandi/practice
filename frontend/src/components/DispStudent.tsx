// import { useStudent } from "../contexts/Student"

import { useDispatch, useSelector } from "react-redux"
import { fetchStudents } from "../features/studentSlice"
import type { AppDispatch } from "../store/store"
import type { RootState } from "../store/store"
import { useEffect } from "react"
import Student from "./Student"

export default function DispStudent() {
  // const { getData, data } = useStudent()
  const dispatch = useDispatch<AppDispatch>()
  const students = useSelector((state:RootState)=>state.student.students)
  const error = useSelector((state:RootState)=>state.student.error)

  useEffect(()=>{
    dispatch(fetchStudents())
  },[])

  return (
    <div className="flex justify-center p-3 flex-col items-center">
      <div className="px-2 py-1 rounded-md bg-green-600 text-white my-2">
        View
      </div>

      <table className="w-auto border">
        <tbody>
          <tr>
            <th className="px-2 py-1 border">S.No</th>
            <th className="px-2 py-1 border">Name</th>
            <th className="px-2 py-1 border">Age</th>
            <th className="px-2 py-1 border">Actions</th>
          </tr>
          {
            students.length===0
            ? <tr>
              <td className="text-center" colSpan={4}>No Student Found</td>
            </tr>
            :students.map((student) => 
             <Student key={student._id} student={student} />
            )
          }
        </tbody>
      </table>
    </div>
  )
}