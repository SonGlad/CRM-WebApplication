import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { RotatingLoader} from './CustomLoaders/CustomLoaders';
import { StyledContainer } from './SharedLayout.styled';
import { useAuth } from "../hooks/useAuth";
import { AsidePanel } from './AsidePanel/AsidePanel';


export const SharedLayout = ({userLocation}) => {
  const {isLoggedIn} = useAuth();

  
  return(
    <StyledContainer $isloggedin={isLoggedIn}>
      <Header/>
      <div className='main'>
        {isLoggedIn && <AsidePanel userLocation={userLocation}/>}
        <Suspense fallback={<RotatingLoader/>}>
          <main>
            <Outlet />
          </main>
        </Suspense>
      </div>
      {!isLoggedIn && <Footer/>}
    </StyledContainer>
  );
};