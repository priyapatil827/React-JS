import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../slices/authenticationSlice";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(signupData));
    // After signup, navigate to sign in
    navigate("/signin");
  };

  return (
    <div className="sms-signin-container">
      <div className="sms-signin-left">
        <h1>Student Management System</h1>
        <p>Create your account to access the dashboard.</p>
      </div>

      <div className="sms-signin-right">
        <form onSubmit={handleSubmit} className="sms-signin-form">
          <h2>Sign Up</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={signupData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={signupData.password}
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
          <p className="signup-text">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
