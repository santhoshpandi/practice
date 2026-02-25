import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Student } from "../types/student";
import type { StudentContextType } from "../types/context";

import axios from 'axios'
import { enqueueSnackbar } from 'notistack'

// ------------- Context Creation ------------- 
const StudentContext = createContext<StudentContextType | undefined>(undefined)

// ------------- Context Provider ------------- 
const StudentProvider : React.FC<{children:ReactNode}> = ({ children }) => {

  const [data, setData] = useState<Student[]>([])
  const [refresh, setRefresh] = useState(false)

  // ****** API BASE URL ******
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
  })

  useEffect(() => {
    getData()
  }, [refresh])

  async function getData() {
    try {
      const res = await api.get<Student[]>('/get')
      console.log(res.data)
      setData(res.data)
    }
    catch (err: any) {
      enqueueSnackbar(err.message, { variant: "error" })
    }       
  }

  async function addData(student: Student) {
    await api.post('/add', student)
      .then(() => {
        enqueueSnackbar('Data Inserted', { variant: 'success' })
        setRefresh(!refresh)
      })
      .catch((err:any) => enqueueSnackbar(err.message, { variant: "error" }))
  }

  return (
    <StudentContext.Provider value={{ getData, addData, data, refresh }}>
      {children}
    </StudentContext.Provider>
  )
}

// ------------- Use Context ------------- 
const useStudent = ():StudentContextType => {
  const context = useContext(StudentContext)
    if (!context) throw new Error("useStudent must be used within a StudentProvider");
  return context;
}

export { StudentContext, StudentProvider, useStudent }