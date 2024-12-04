import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorrPage from '../components/ErrorrPage';
import Home from '../pages/Home';
import MainLayout from '../layout/MainLayout';
import Login from '../components/Login';
import Register from '../components/Register';

const router = createBrowserRouter([
      {
            path: "/",
            element: <MainLayout></MainLayout>,
           errorElement:<ErrorrPage></ErrorrPage>,
            children:[
                  {
                        path:'home',
                        element:<Home></Home>
                  },
                  {
                        path:'login',
                        element:<Login></Login>
                  },
                  {
                        path:'register',
                        element:<Register></Register>
                  },
            ]
      },
])

export default router;