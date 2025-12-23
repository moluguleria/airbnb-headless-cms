import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function HostRoute({ children }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  // Allow hosts and admins
  if (user.role !== "host" && user.role !== "admin") return <Navigate to="/" replace />;

  return children;
}
