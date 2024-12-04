import React from 'react';
import BannerSlider from '../components/BannerSlider';
import HomeNavbar from '../components/HomeNavbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
      return (
            <div className='space-y-4'>
                  <HomeNavbar></HomeNavbar>
                 <BannerSlider></BannerSlider>
                 <Outlet></Outlet>
            </div>
      );
};

export default Home;