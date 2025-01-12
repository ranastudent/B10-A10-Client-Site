import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-opacity-50 backdrop-blur-lg' : 'bg-[#DADBDD]'}`}>
      <div className="navbar-start z-50">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/campaigns'><a>All Campaign</a></NavLink></li>
            {user && (
              <>
                <li><NavLink to='/addCampaign'><a>Add New Campaign</a></NavLink></li>
                <li><NavLink to='/donation'><a>My Donation</a></NavLink></li>
                <li><NavLink to='/campaign'><a>My Campaign</a></NavLink></li>
              </>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Crowdh Founding</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/campaigns'><a>All Campaign</a></NavLink></li>
          {user && (
            <>
              <li><NavLink to='/addCampaign'><a>Add New Campaign</a></NavLink></li>
              <li><NavLink to='/donation'><a>My Donation</a></NavLink></li>
              <li><NavLink to='/campaign'><a>My Campaign</a></NavLink></li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <div className="flex items-center space-x-2">
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
                title={user.displayName}
              />
              <a onClick={handleLogout} className="btn">Logout</a>
            </div>
          </>
        ) : (
          <Link to='/login'><a className="btn">Login</a></Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
