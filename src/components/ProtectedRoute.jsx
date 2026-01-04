import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const isAuth = localStorage.getItem("isAuth");
  const savedRole = localStorage.getItem("role");

  if (!isAuth || savedRole !== role) {
    return <Navigate to="/login" />;
  }

  return children;
}
