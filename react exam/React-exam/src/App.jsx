import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import FirstPage from "./Pages/FirstPage/FirstPage";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import StudentList from "./Components/StudentList/StudentList";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import StudentDetails from "./Components/StudentDetails/StudentDetails";

function AppWrapper() {
  const location = useLocation();

  const hideNavbarPaths = ["/", "/signin", "/signup"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {/* Navbar visible on all pages except the hidden paths */}
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/student/:id" element={<StudentDetails />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
