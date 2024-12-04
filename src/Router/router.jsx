import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorrPage from '../components/ErrorrPage';

const router = createBrowserRouter([
      {
            path: "/",
            element: <div>Hello world!</div>,
            errorElement:<ErrorrPage></ErrorrPage>,
            children:[
                  {

                  },
            ]
      },
])

export default router;