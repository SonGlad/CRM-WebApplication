import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Loading } from './CustomLoaders/CustomLoaders';
import { StyledContainer } from './SharedLayout.styled';
import { useAuth } from "../hooks/useAuth";


export const SharedLayout = () => {
  const {isLoggedIn} = useAuth();

  
  return(
    <StyledContainer>
      <Header />
      <Suspense fallback={<Loading/>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      {!isLoggedIn && <Footer />}
    </StyledContainer>
  );
};