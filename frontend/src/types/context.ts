import type { Student } from "./student"

export interface StudentContextType{
  data: Student[],
  refresh: boolean,
  getData:()=>Promise<void>,
  addData:(student: Student)=> Promise<void>
}