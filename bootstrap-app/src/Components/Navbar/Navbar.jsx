import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex align-items-center fw-bold fs-3"
          href="#"
        >
          SkillUp
        </a>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="stdDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                STD 10th & 12th
              </a>
              <ul className="dropdown-menu" aria-labelledby="stdDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    10th Pass
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    12th Pass
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="coursesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Full Stack
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    UI/UX
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Company
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Team
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
