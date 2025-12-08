import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authenticationSlice";
import studentsReducer from "../slices/studentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    students: studentsReducer,
  },
});

export default store;
