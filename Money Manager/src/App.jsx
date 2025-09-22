import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import './App.css';


export default function App() {
  return (
      <div className="container mt-4">
        <h2 className="text-center mb-4">🎬 Favorite Movies Manager</h2>

        <nav className="mb-4">
          <Link className="btn btn-primary me-2" to="/">
            Home
          </Link>
          <Link className="btn btn-success" to="/movies">
            Movies
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
  );
}
