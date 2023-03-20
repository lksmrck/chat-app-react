import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FC } from "react";

const ProtectedRoutes: FC<{ allowedRights: string[] }> = ({
  allowedRights,
}) => {
  const { user } = useAuth();
  const location = useLocation();

  //TODO: Ověřit, aby nebyl problem, kdyz user v prohlizeci manualne prida do LS key user

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  return <Outlet />;

  /* return allowedRights.find((right: string) => right.includes(user!.rights)) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" /> 
  ); */
};
export default ProtectedRoutes;
