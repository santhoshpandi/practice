import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Student } from "../types/student";
import api from "../lib/api";

interface InitialState {
  students: Student[],
  error: string | null
}

const initialState: InitialState = {
  students: [],
  error: null
}

// Async Function Implementation starts

/*
createAsyncThunk<
  return type,
  argument type,
  {rejectValue:string} error return type
>('name', async()=>{})
*/

const addStudent = createAsyncThunk<Student, Partial<Student>, { rejectValue: string }>('student/add', async (newStudent, { rejectWithValue }) => {
  try {
    const res = await api.post("/add", newStudent);
    return res.data.data;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || "Failed"
    );
  }
})
const fetchStudents = createAsyncThunk<Student[], void, { rejectValue: string }>('student/fetch', async (_NEVER, { rejectWithValue }) => {
  try {
    const res = await api.get('/get')
    return res.data
  }
  catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || "Failed"
    );
  }
})
const deleteStudent = createAsyncThunk<string, string, { rejectValue: string }>('student/delete', async (id, { rejectWithValue }) => {
  try {
    await api.delete(`/del/${id}`)
    return id
  }
  catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || "Failed"
    );
  }
})

// Async Function Implementation ends

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    clearError:(state)=>{
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      // Add
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload)
        state.error = null
      })
      .addCase(addStudent.rejected, (state, action) => {
        state.error = action.payload ?? "Something went wrong";
      })
      // Fetch
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.students = action.payload
        state.error = null
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.error = action.payload ?? "Something went wrong";
      })

      // Delete
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter(s => s._id !== action.payload)
        state.error = null
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.error = action.payload ?? "Something went wrong";
      })
  }
})

export {addStudent, fetchStudents, deleteStudent}

export default studentSlice.reducer