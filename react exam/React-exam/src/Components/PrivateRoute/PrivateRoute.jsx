import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />; // redirect if not logged in
  }

  return children; // render protected component
}
