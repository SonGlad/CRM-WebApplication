import { SharedLayout } from "./SharedLayout";
import { Route, Routes, Navigate} from "react-router-dom";
import { lazy, useEffect} from "react";
import { Toaster } from "./ToastContainer/ToastContainer";
import { RestrictedRoute } from "../routes/RestrictedRoute";
import { Modal } from "./Modal/Modal";
import { useModal } from "../hooks/useModal";
import { RefreshLoading } from "../components/CustomLoaders/CustomLoaders";
import { useAuth } from "../hooks/useAuth";
import { useDispatch} from "react-redux";
import { refreshCurrentUser } from "../redux/Auth/auth-operation";
// import { PrivateRoute } from "./PrivateRoute";


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));



export const App= () => {
  const dispatch = useDispatch();
  const {isLoadingAuth, isRefreshing} = useAuth();
  const {isSettingsModal} = useModal();


  useEffect(() => {
    dispatch(refreshCurrentUser());
  },[dispatch])


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
        </Route>    
      </Routes>
      {(isSettingsModal) && <Modal/>}
    </>
  );
};
