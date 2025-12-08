import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <div className="sms-dashboard-container">
      {/* Navbar */}
      {/*    */}

      {/* Center Content */}
      <div className="sms-center-content">
        <div className="sms-logo-center">🎓</div>
        <h1>Welcome to Student Management System!</h1>
        <p>Efficiently manage students, classes, and records with ease.</p>

        <button
          className="sms-view-students-btn"
          onClick={() => navigate("/students")}
        >
          View Students
        </button>
      </div>
    </div>
  );
}
