import { useAuth } from "../hooks/useAuth";
import { Navigate } from 'react-router-dom';


export const RestrictedRoute = ({ 
  component: Component, 
  redirectTo = '/', 
  noneAdminTo = '/leads' 
}) => {
  const { isLoggedIn, isAdmin, isInitialized } = useAuth();


  if (isLoggedIn && isInitialized && isAdmin) {
    return <Navigate to={redirectTo}/>
  } else if (isLoggedIn && isInitialized && !isAdmin) {
    return <Navigate to={noneAdminTo}/>
  }

  return Component;
};