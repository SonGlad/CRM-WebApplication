import { SharedLayout } from "./SharedLayout";
import { Route, Routes, Navigate} from "react-router-dom";
import { lazy} from "react";
import { Toaster } from "./ToastContainer/ToastContainer";
import { RestrictedRoute } from "../routes/RestrictedRoute";
// import { useDispatch} from "react-redux";
// import { PrivateRoute } from "./PrivateRoute";


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));



export const App= () => {
  return (
    <>
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
    </>
  );
};
