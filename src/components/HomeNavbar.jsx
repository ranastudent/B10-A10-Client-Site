import React from 'react';
import { Link } from 'react-router-dom';

const HomeNavbar = () => {
      return (
            <div className="navbar bg-[#FFC0CB]">
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
        <li><Link to='running'><a>Running Campaign</a></Link></li>
        <li>
          <Link to='mission'><a>Out Mission</a></Link>
          
        </li>
        <li><Link to='partner'><a>Be a Partner</a></Link></li>
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='running'><a>Running Campaign</a></Link></li>
        <li>
          <Link to='mission'><a>Out Mission</a></Link>
          
        </li>
        <li><Link to='partner'><a>Be a Partner</a></Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    
  </div>
</div>
      );
};

export default HomeNavbar;