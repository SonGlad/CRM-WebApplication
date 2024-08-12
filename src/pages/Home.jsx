import {Welcome} from "../components/HomePage/WelcomePage/Welcome";
import { Main } from "../components/HomePage/MainPage/Main";
import { useAuth } from "../hooks/useAuth";



const HomePage = () => {
  const {isLoggedIn} = useAuth();


  return isLoggedIn ? (
      <Main/>
    ) : (
      <Welcome/>
  );
};


export default HomePage