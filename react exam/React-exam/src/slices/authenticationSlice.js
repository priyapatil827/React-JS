import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Register a new user
    registerUser: (state, action) => {
      const user = action.payload;
      const exists = state.users.find((u) => u.email === user.email);
      if (exists) {
        alert("User already registered!");
        return;
      }
      state.users.push(user);
      localStorage.setItem("users", JSON.stringify(state.users));
      alert("Signup successful! Please login.");
    },

    // Login existing user
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (!foundUser) {
        alert("Invalid email or password!");
        return;
      }
      state.currentUser = foundUser;
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
    },

    // Logout
    logoutUser: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
