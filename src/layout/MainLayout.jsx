import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`space-y-5 my-5 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className='w-full mx-auto'>
        <Navbar />
        <button
          onClick={toggleTheme}
          className='mt-20 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
