import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Loading } from './CustomLoaders/CustomLoaders';
import { StyledContainer } from './SharedLayout.styled';
import { useAuth } from "../hooks/useAuth";
import { AsidePanel } from './AsidePanel/AsidePanel';


export const SharedLayout = () => {
  const {isLoggedIn} = useAuth();

  
  return(
    <StyledContainer>
      <Header/>
      <div className='main'>
        {isLoggedIn && <AsidePanel/>}
        <Suspense fallback={<Loading/>}>
          <main>
            <Outlet />
          </main>
        </Suspense>
      </div>
      {!isLoggedIn && <Footer/>}
    </StyledContainer>
  );
};