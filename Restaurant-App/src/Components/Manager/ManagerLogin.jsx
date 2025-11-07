import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showManagerDashboard, resetSection } from "../../slice/sectionSlice";

export default function ManagerLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      dispatch(showManagerDashboard());
    } else {
      alert("Invalid Manager Credentials");
    }
  };

  return (
    <div className="login-page">
      <h2>🧑‍💼 Manager Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={() => dispatch(resetSection())}>Back</button>
      </div>
    </div>
  );
}
