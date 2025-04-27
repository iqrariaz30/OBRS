import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

const UserLayout = () => {
  return (
    <>
      <MainNavbar />
      <main className="flex-shrink-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;