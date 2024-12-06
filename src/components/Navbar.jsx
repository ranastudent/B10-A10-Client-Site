import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/')
  }
  return (
    <div className="navbar bg-[#DADBDD]">
      <div className="navbar-start">
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
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/campaigns'><a>All Campaign</a></NavLink></li>
            <li><NavLink to='/addCampaign'><a>Add New Campaign</a></NavLink></li>
            <li><NavLink to='/donation'><a>My Donation</a></NavLink></li>
            <li><NavLink to='/campaign'><a>My Campaign </a></NavLink></li>


          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Crowdh Founding</a>
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to='/home'>Home</NavLink></li>
          <li><NavLink to='/campaigns'><a>All Campaign</a></NavLink></li>
          <li><NavLink to='/donation'><a>My Donation</a></NavLink></li>
          <li><NavLink to='/addCampaign'><a>Add New Campaign</a></NavLink></li>
          <li><NavLink to='/campaign'><a>My Campaign </a></NavLink></li>
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {
          user ?
            <>
              <a onClick={handleLogout} className='btn'>Logout</a>
            </>
            :
            <> <Link to='/login'><a className="btn">Login</a></Link></>
        }
      </div>
    </div>
  );
};

export default Navbar;