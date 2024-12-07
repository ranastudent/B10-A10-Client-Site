import React from 'react';
import BannerSlider from '../components/BannerSlider';
import HomeNavbar from '../components/HomeNavbar';
import { Outlet } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
      return (
            <div className='space-y-4'>
                  <Typewriter>
                        words={['Welcome to our Crowdfunding Platform!', 'Empower your dreams!', 'Join us today!']}
                        loop={100}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                  </Typewriter>
                  <HomeNavbar></HomeNavbar>
                  <BannerSlider></BannerSlider>
                  <Outlet></Outlet>
            </div>
      );
};

export default Home;