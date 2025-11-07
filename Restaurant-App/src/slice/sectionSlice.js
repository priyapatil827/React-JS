import { createSlice } from "@reduxjs/toolkit";

const sectionSlice = createSlice({
  name: "section",
  initialState: {
    activeSection: "", // none | employeeLogin | managerLogin | employeeDashboard | managerDashboard
  },
  reducers: {
    showEmployeeLogin: (state) => {
      state.activeSection = "employeeLogin";
    },
    showManagerLogin: (state) => {
      state.activeSection = "managerLogin";
    },
    showEmployeeDashboard: (state) => {
      state.activeSection = "employeeDashboard";
    },
    showManagerDashboard: (state) => {
      state.activeSection = "managerDashboard";
    },
    resetSection: (state) => {
      state.activeSection = "";
    },
  },
});

export const {
  showEmployeeLogin,
  showManagerLogin,
  showEmployeeDashboard,
  showManagerDashboard,
  resetSection,
} = sectionSlice.actions;

export default sectionSlice.reducer;
