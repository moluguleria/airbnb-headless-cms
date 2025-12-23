import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return null; // or spinner

  if (!user) return <Navigate to="/login" replace />;

  if (user.role?.name !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
