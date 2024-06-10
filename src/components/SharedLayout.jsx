import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Loading } from './CustomLoaders/CustomLoaders';




export const SharedLayout = () => {

  return(
    <>
      <Header />
      <Suspense fallback={<Loading/>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer/>
    </>
  );
};