import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../context/AuthContext";
import { FC } from "react";
import Spinner from "../ui/Spinner";

const ProtectedRoutes: FC = () => {
  const { currentUser, isLoading } = useAuth();

  return currentUser ? <Outlet /> : isLoading ? <Spinner size="lg" /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
