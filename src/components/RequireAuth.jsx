// src/components/RequireAuth.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated, getRole } from "../utils/auth";

export default function RequireAuth({ children, allowedRoles = [] }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  const role = getRole();
  if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    // Not authorized for this route
    return <Navigate to="/" replace />;
  }
  return children;
}
