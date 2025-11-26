import React, { useState, useEffect } from 'react'
import { signup, fetchusers } from '../../slice/userslice';
import { useDispatch, useSelector } from "react-redux";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { users } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchusers());
  }, [dispatch]);

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2 className="title">Create Account</h2>

        <div className="input-group">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <button
          className="btn signup-btn"
          onClick={() => dispatch(signup({ email, password }))}
        >
          Sign Up
        </button>

        <div className="users-list">
          {users.map((user, i) => (
            <div key={i} className="user-item">{user.email}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
