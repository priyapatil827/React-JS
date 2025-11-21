import React, { useState } from 'react'
import { signup } from '../../slice/userslice';
import { useDispatch } from "react-redux"
import "./SignUp.css";

export default function SignUp() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = () => {
    dispatch(signup({ name, email, password }));
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">

        <h2 className="title">Create Account ✨</h2>
        <p className="subtitle">Join and start chatting</p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn-login" onClick={handleSignup}>
          Sign Up
        </button>

      </div>
    </div>
  );
}
