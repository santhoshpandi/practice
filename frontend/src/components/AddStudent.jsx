import { useStudent } from "../contexts/Student"
import {useForm} from 'react-hook-form'

export default function AddStudent() {

  const { register, handleSubmit, reset } = useForm()
  const {addData} = useStudent()

  function submitData(formData) {
    addData(formData)
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitData)}>
        <table className="table-auto border-none m-2 mx-auto bg-blue-400">
          <tbody >
            <tr className="border">
              <th>Name</th>
              <th>Age</th>
              <th rowSpan={2}>
                <button type="submit">
                  ➕
                </button>
              </th>
            </tr>
            <tr className="border">
              <td>
                <input className="bg-slate-200 px-2 py-0.5" type="text" { ...register('name', {required:true}) } />
              </td>
              <td>
                <input className="bg-slate-200 px-2 py-0.5" type="number" {...register('age', {required:true})} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}