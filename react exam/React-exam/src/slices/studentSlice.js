import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch students from API
export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await fetch("http://localhost:3000/students");
    const data = await response.json();
    return data; // if API returns {students: [...]}, use return data.students
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    loading: false,
    error: null,
  },
  reducers: {
    updateStudent: (state, action) => {
      const updatedStudent = action.payload;
      const index = state.students.findIndex(s => s.id === updatedStudent.id);
      if (index !== -1) state.students[index] = updatedStudent;
    },
    deleteStudent: (state, action) => {
      const id = action.payload;
      state.students = state.students.filter(s => s.id !== id);
    },
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.students = action.payload;
        state.loading = false;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateStudent, deleteStudent, addStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
