import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { enqueueSnackbar } from 'notistack'

// ------------- Context Creation ------------- 
const StudentContext = createContext()

// ------------- Context Provider ------------- 
const StudentProvider = ({ children }) => {

  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)

  // ****** API BASE URL ******
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
  })

  useEffect(() => {
    getData()
  }, [refresh])

  async function getData() {
    const res = await api.get('/get')
      .then()
      .catch((err) => enqueueSnackbar(err.message, { variant: "error" }))
    setData(res.data)
  }

  async function addData(data) {
    const res = await api.post('/add', data)
      .then(() => {
        enqueueSnackbar('Data Inserted', { variant: 'success' })
        setRefresh(!refresh)
      })
      .catch((err) => enqueueSnackbar(err.message, { variant: "error" }))
  }

  return (
    <StudentContext.Provider value={{ getData, addData, data }}>
      {children}
    </StudentContext.Provider>
  )
}

// ------------- Use Context ------------- 
const useStudent = () => {
  return useContext(StudentContext)

}

export { StudentContext, StudentProvider, useStudent }