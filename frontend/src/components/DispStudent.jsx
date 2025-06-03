import { useStudent } from "../contexts/Student"

export default function DispStudent() {
  const { getData, data } = useStudent()
  return (
    <div className="flex justify-center p-3 flex-col items-center">
      <button className="px-2 py-1 rounded-md bg-green-600 text-white my-2"
        onClick={getData}>
        View
      </button>

      <table className="w-auto border">
        <tbody>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {
            data.map((d, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{d.name}</td>
                <td>{d.age}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}