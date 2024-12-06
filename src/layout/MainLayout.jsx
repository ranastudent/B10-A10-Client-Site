import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';



const MainLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`space-y-5 my-5 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className='w-10/12 mx-auto'>
        <Navbar />
        <button
          onClick={toggleTheme}
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
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
