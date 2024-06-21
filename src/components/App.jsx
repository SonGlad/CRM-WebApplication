import { SharedLayout } from "./SharedLayout";
import { Route, Routes, Navigate} from "react-router-dom";
import { lazy, useEffect} from "react";
import { Toaster } from "./ToastContainer/ToastContainer";
import { Modal } from "./Modal/Modal";
import { useModal } from "../hooks/useModal";
import { RefreshLoading } from "../components/CustomLoaders/CustomLoaders";
import { useAuth } from "../hooks/useAuth";
import { 
  updatingAdmin,
  updatingManager,
  updatingConversion,
  updatingRetention,
  updatingConversionManager,
  updatingRetentionManager,
 } from "../redux/Auth/auth-slice";
import { useDispatch} from "react-redux";
import { refreshCurrentUser } from "../redux/Auth/auth-operation";
import { RestrictedRoute } from "../routes/RestrictedRoute";
import { PrivateRoute } from "../routes/PrivateRoute";


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const UsersPage = lazy(() => import('../pages/Users'));
const OfficeLeadsPage = lazy(() => import('../pages/OfficeLeads'))


export const App= () => {
  const dispatch = useDispatch();
  const {isLoadingAuth, isRefreshing, userRole} = useAuth();
  const {isSettingsModal, isNewUserModal, isNewLeadModal} = useModal();


  useEffect(() => {
    dispatch(refreshCurrentUser());
  },[dispatch]);


  useEffect(() => {
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
  },[dispatch, userRole])


  return isRefreshing ? (
    <RefreshLoading/>
  ) : (
    <>
      {isLoadingAuth && <RefreshLoading />}
      <Toaster/>
      <Routes>
        <Route parth='/' element = {<SharedLayout/>}>
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
      {(isSettingsModal || isNewUserModal || isNewLeadModal) && <Modal/>}
    </>
  );
};
