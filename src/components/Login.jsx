import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
      return (
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Login</h2>
                  <form>
                        <div className="mb-4">
                              <label className="block text-gray-700">Email</label>
                              <input type="email" className="w-full px-3 py-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                              <label className="block text-gray-700">Password</label> <input type="password" className="w-full px-3 py-2 border rounded" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"> Login </button> </form>
                        <p>Not Account?<Link to='/register' className='text-red-500'> Register</Link></p> 
                        </div>
      );
};

export default Login;