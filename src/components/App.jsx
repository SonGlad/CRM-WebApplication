import { SharedLayout } from "./SharedLayout";
import { Route, Routes, Navigate, useLocation, useNavigate} from "react-router-dom";
import { lazy, useEffect} from "react";
import { Toaster } from "./ToastContainer/ToastContainer";
import { Modal } from "./Modal/Modal";
import { RefreshLoading } from "../components/CustomLoaders/CustomLoaders";
import { useModal } from "../hooks/useModal";
import { useAuth } from "../hooks/useAuth";
import { 
  updatingAdmin,
  updatingManager,
  updatingConversion,
  updatingRetention,
  updatingConversionManager,
  updatingRetentionManager,
  saveUserCurrentLocation,
  updatingForNoneAdminLogin,
} from "../redux/Auth/auth-slice";
import { refreshCurrentUser } from "../redux/Auth/auth-operation";
import { getAvailableUsers, getAllUsers } from "../redux/User/user-operation";
import { getAllLeads } from "../redux/Lead/lead-operation";
import { useDispatch} from "react-redux";
import { RestrictedRoute } from "../routes/RestrictedRoute";
import { PrivateRoute } from "../routes/PrivateRoute";
import { useLead } from "../hooks/useLead";
import { useUser } from "../hooks/useUser";


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const UsersPage = lazy(() => import('../pages/Users'));
const OfficeLeadsPage = lazy(() => import('../pages/OfficeLeads'))


export const App= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { leadOffice } = useLead();
  const { userOffice } = useUser();
  const {
    isLoadingAuth, 
    isRefreshing, 
    userRole, 
    userLocation, 
    isLoggedIn, 
    isInitial, 
    isAdmin,
    forNoneAdminLogin,
    isManager,
    isConversion,
    isConversionManager,
  } = useAuth();
  const {
    isSettingsModal, 
    isNewUserModal, 
    isNewLeadModal, 
    isUserDetails,
    isLeadDetails, 
    isConfirmModal,
  } = useModal();
  const currentPath = useLocation().pathname;


  useEffect(() => {
    if(!isInitial){
      dispatch(refreshCurrentUser());
      if (userLocation) {
        navigate(userLocation);
      }    
    }
  },[dispatch, isInitial, navigate, userLocation]);


  useEffect(() => {
    if(isLoggedIn){
      if (userRole === 'Developer' || userRole === 'Administrator' || userRole === 'Manager') {
        dispatch(updatingAdmin())
      }
      if(userRole === 'CRM Manager'){
        dispatch(updatingManager())
      }
      if(userRole === 'Conversion Manager' || userRole === 'Conversion Agent'){
        dispatch(updatingConversion())
      }
      if(userRole === 'Retention Manager' || userRole === 'Retention Agent'){
        dispatch(updatingRetention())
      }
      if(userRole === 'Conversion Manager'){
        dispatch(updatingConversionManager())
      }
      if(userRole === 'Retention Manager'){
        dispatch(updatingRetentionManager())
      }
    }
  },[dispatch, isLoggedIn, userRole]);
  

  useEffect(() => {
    if(isLoggedIn && !isAdmin && forNoneAdminLogin){
      if (userRole === 'CRM Manager' || userRole === 'Conversion Manager' || userRole === 'Conversion Agent') {
        navigate('/leads');
        setTimeout(() => {
          dispatch(updatingForNoneAdminLogin())
        }, 1000)
      }
    }
  }, [dispatch, forNoneAdminLogin, isAdmin, isLoggedIn, navigate, userRole]);


  useEffect(() => {
    if(isLoggedIn && isAdmin && userLocation === '/'){
      dispatch(getAllLeads())
    } 
    if(isLoggedIn && isAdmin && userLocation === '/leads'){
      dispatch(getAllLeads(leadOffice))
    }
    if(isLoggedIn && (isManager || isConversion) && userLocation === '/leads'){
      dispatch(getAllLeads())
    }
    if(isLoggedIn && isAdmin && userLocation === '/users'){
      dispatch(getAllUsers(userOffice))
    }
    if(isLoggedIn && (isManager || isConversionManager) && userLocation === '/users'){
      dispatch(getAllUsers())
    }
  },[dispatch, isAdmin, isConversion, isConversionManager, isLoggedIn, isManager, leadOffice, userLocation, userOffice]);

  
  useEffect(() =>{
    dispatch(saveUserCurrentLocation(currentPath))
  },[currentPath, dispatch]);


  useEffect(() => {
    if(isLoggedIn && userLocation === '/leads' && forNoneAdminLogin){
      dispatch(getAvailableUsers())
    }
  },[dispatch, forNoneAdminLogin, isLoggedIn, userLocation]);



  return isRefreshing ? (
    <RefreshLoading/>
  ) : (
    <>
      {isLoadingAuth && <RefreshLoading />}
      <Toaster/>
      <Routes>
        <Route parth='/' element = {<SharedLayout userLocation={userLocation}/>}>
          <Route index element={<HomePage/>}/>
          <Route path='*' element = {<Navigate to="/"/>}/>
          <Route path="/signup" element={
            <RestrictedRoute redirectTo="/" component={<RegisterPage/>} />
          }/>
          <Route path="/signin" element={
            <RestrictedRoute redirectTo="/" component={<LoginPage/>} />
          }/>
          <Route path="/leads" element={
            <PrivateRoute redirectTo="/signin" component={<OfficeLeadsPage/>}/>
          }/>
          <Route path="/users" element={
            <PrivateRoute redirectTo="/signin" component={<UsersPage/>}/>
          }/>
        </Route>    
      </Routes>
      {(isSettingsModal || 
        isNewUserModal || 
        isNewLeadModal || 
        isUserDetails || 
        isConfirmModal ||
        isLeadDetails) && 
        <Modal userLocation={userLocation}/>
      }
    </>
  );
};
