import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">🏫 Student Management</span>
      </div>

      <div className="navbar-right">
        {user && <span className="navbar-user">{user.email}</span>}
        <button className="navbar-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
