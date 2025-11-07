import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showEmployeeDashboard, resetSection } from "../../slice/sectionSlice";

export default function EmployeeLogin() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (name.trim() !== "") {
      dispatch(showEmployeeDashboard());
    } else {
      alert("Enter Employee Name");
    }
  };

  return (
    <div className="login-page">
      <h2>👨‍🍳 Employee Login</h2>
      <input
        type="text"
        placeholder="Enter Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={() => dispatch(resetSection())}>Back</button>
      </div>
    </div>
  );
}
