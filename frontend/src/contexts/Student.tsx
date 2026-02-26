import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Student } from "../types/student";
import type { StudentContextType } from "../types/context";

import axios from 'axios'
import toast from "react-hot-toast";

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
      toast.error(err.message)
    }       
  }

  async function addData(student: Student) {
    await api.post('/add', student)
      .then(() => {
        toast.success('Data Inserted')
        setRefresh(!refresh)
      })
      .catch((err:any) => toast.error(err.message))
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