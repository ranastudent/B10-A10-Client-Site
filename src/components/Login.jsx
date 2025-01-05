import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2';
import Lottie from 'react-lottie';
import animationData from '../../public/Animation - 1733838028911 (1).json'; // Update the path to your Lottie animation JSON file

const Login = () => {
      const { login, googleLogin } = useContext(AuthContext);
      const navigate = useNavigate();

      const handleLogin = e => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;

            login(email, password)
                  .then(result => {
                        result.user;
                        Swal.fire({
                              icon: "success",
                              title: "Welcome",
                              text: "Successfully Login!",
                              footer: '<a href="#">Why do I have this issue?</a>'
                        });
                        navigate('/');
                  })
                  .catch(err => {
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Something went wrong!",
                              footer: '<a href="#">Why do I have this issue?</a>'
                        });
                  });
      };

      const handleGoogleLogin = () => {
            googleLogin()
                  .then((res) => {
                        res.user;
                        Swal.fire({
                              icon: "success",
                              title: "Welcome",
                              text: "Successfully Login!",
                              footer: '<a href="#">Why do I have this issue?</a>'
                        });
                        navigate('/');
                  })
                  .catch((error) => {
                        console.error('Error during Google login:', error);
                  });
      };

      const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
            }
      };

      return (
            <div className="max-w-md mx-auto mt-10 p-6 bg-[#FFC0CB] rounded-lg shadow-md">
                  <Lottie options={defaultOptions} height={200} width={200} />
                  <h2 className="text-2xl font-bold mb-6">Login</h2>
                  <form onSubmit={handleLogin}>
                        <div className="mb-4">
                              <label className="block text-gray-700">Email</label>
                              <input type="email" name='email' className="w-full px-3 py-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                              <label className="block text-gray-700">Password</label>
                              <input type="password" name='password' className="w-full px-3 py-2 border rounded" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
                  </form>
                  <br /><p>or</p>
                  <div className='flex'>
                        <p onClick={handleGoogleLogin} className='btn text-[#AA336A]'>Login With Gmail</p>
                  </div>
                  <p>Not Account?<Link to='/register' className='text-red-500'> Register</Link></p>
            </div>
      );
};

export default Login;
