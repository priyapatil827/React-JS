import React from "react";
import { useNavigate } from "react-router-dom";
import "./FirstPage.css";

export default function FirstPage() {
  const navigate = useNavigate();

  return (
    <div className="firstpage-container">
      <div className="overlay"></div>

      <div className="content-box">
        <h1 className="title">Student Management System</h1>
        <p className="subtitle">
          Manage student records, update information, and keep everything organized
          in one place.
        </p>

        <div className="btn-group">
          <button className="btn-primary" onClick={() => navigate("/signin")}>
            Sign In
          </button>

          <button className="btn-secondary" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
