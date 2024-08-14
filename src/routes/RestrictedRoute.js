import { useAuth } from "../hooks/useAuth";
import { Navigate } from 'react-router-dom';



export const RestrictedRoute = ({ 
  component: Component, 
  redirectTo = '/', 
  adminRedirectTo = '/leads', 
}) => {
  const { isLoggedIn, isAdmin } = useAuth();

  if (isLoggedIn && !isAdmin) {
    return <Navigate to={adminRedirectTo} />;
  }

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};