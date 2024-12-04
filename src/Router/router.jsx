import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorrPage from '../components/ErrorrPage';
import Home from '../pages/Home';
import MainLayout from '../layout/MainLayout';

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
            ]
      },
])

export default router;