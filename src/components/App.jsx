import { SharedLayout } from "./SharedLayout";
import { Route, Routes, Navigate} from "react-router-dom";
import { lazy} from "react";
// import { useDispatch} from "react-redux";
// import { PrivateRoute } from "./PrivateRoute";
// import { RestrictedRoute } from "./RestrictedRoute";


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));



export const App= () => {
  return (
    <>
    <Routes>
      <Route parth='/' element = {<SharedLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='*' element = {<Navigate to="/"/>}/>
        <Route path ='/signup' element = {<RegisterPage/>}/>
        <Route path ='/signin' element = {<LoginPage/>}/>
        {/* <Route path="/signup" element={
          <RestrictedRoute redirectTo="/" component={<RegisterPage/>} />
          }/>
        <Route path="/signin" element={
          <RestrictedRoute redirectTo="/" component={<LoginPage/>} />
          }/> */}
      </Route>    
    </Routes>
    </>
  );
};
