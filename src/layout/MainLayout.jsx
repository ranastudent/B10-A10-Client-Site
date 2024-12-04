import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
      return (
            <div className='space-y-5 my-5 '>
                  <div className='w-10/12 mx-auto bg-[#DADBDD]'>
                  <Navbar></Navbar>
                  <Outlet></Outlet>
                  </div>
                  <Footer></Footer>
            </div>
      );
};

export default MainLayout;