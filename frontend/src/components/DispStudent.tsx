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
            <th className="px-2 py-1 border">S.No</th>
            <th className="px-2 py-1 border">Name</th>
            <th className="px-2 py-1 border">Age</th>
          </tr>
          {
            data.map((d, index) => (
              <tr key={index}>
                <td className="px-2 py-1 border">{index + 1}</td>
                <td className="px-2 py-1 border">{d.name}</td>
                <td className="px-2 py-1 border">{d.age}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}