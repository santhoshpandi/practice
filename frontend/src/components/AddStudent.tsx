import { useDispatch } from "react-redux"
// import { useStudent } from "../contexts/Student"
import { addStudent } from "../features/studentSlice"
import type { Student } from "../types/student"
import type { AppDispatch } from "../store/store"
import { useState, type FormEvent } from "react"

export default function AddStudent() {

  const [formData, setFormData] = useState<Partial<Student>>({
    name: '', age: null
  })
  // const {addData} = useStudent() from context API
  const dispatch = useDispatch<AppDispatch>()

  function submitData(e: FormEvent) {
    e.preventDefault();
    // addData(formData)
    dispatch(addStudent(formData))
    setFormData({ name: '', age: null })
  }

  return (
    <div>
      <form onSubmit={submitData}>
        <table className="table-auto border-none m-2 mx-auto bg-blue-400">
          <tbody >
            <tr className="border">
              <th>Name</th>
              <th>Age</th>
              <th className=" border" rowSpan={2}>
                <button className="cursor-pointer p-2 hover:bg-blue-500 duration-150" type="submit">
                  ➕
                </button>
              </th>
            </tr>
            <tr className="border">
              <td className="border">
                <input
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  value={formData.name ?? ''}
                  className="bg-slate-200 px-2 py-0.5" type="text" name='name' />
              </td>
              <td className="border">
                <input
                  onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                  value={formData.age ?? ''}
                  className="bg-slate-200 px-2 py-0.5" type="number" name='age' />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}