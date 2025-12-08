import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../slices/authenticationSlice";
import { useNavigate, Link } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // For showing error messages

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );

    if (foundUser) {
      // Login successful
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      dispatch(loginUser(loginData));
      navigate("/dash");
    } else {
      // Invalid credentials
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="sms-signin-container">
      <div className="sms-signin-left">
        <h1>Student Management System</h1>
        <p>Welcome back! Please login to access your dashboard.</p>
      </div>

      <div className="sms-signin-right">
        <form onSubmit={handleSubmit} className="sms-signin-form">
          <h2>Sign In</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={loginData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={loginData.password}
            onChange={handleChange}
          />
          <button type="submit">Sign In</button>
          {error && <p className="error-text">{error}</p>} {/* Show error */}
          <p className="signup-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
