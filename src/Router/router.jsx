import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorrPage from '../components/ErrorrPage';
import Home from '../pages/Home';
import MainLayout from '../layout/MainLayout';
import Login from '../components/Login';
import Register from '../components/Register';
import RunningCampaign from '../components/RunningCampaign';
import OurMission from '../components/OurMission';
import Partner from '../components/Partner';
import AddNewCampaign from '../pages/AddNewCampaign';
import PrivateRoute from './PrivateRoute';
import MyDonation from '../pages/MyDonation';
import MyCampaign from '../pages/MyCampaign';
import AllCampaign from '../pages/AllCampaign';

const router = createBrowserRouter([
      {
            path: "/",
            element: <MainLayout></MainLayout>,
           errorElement:<ErrorrPage></ErrorrPage>,
            children:[
                  {
                        path:'home',
                        element:<Home></Home>,
                        children:[
                              {
                                    path:'running',
                                    element:<RunningCampaign></RunningCampaign>
                              },
                              {
                                    path:'mission',
                                    element:<OurMission></OurMission>
                              },
                              {
                                    path:'partner',
                                    element:<Partner></Partner>
                              }
                        ]
                  },
                  {
                        path:'allCampaign',
                        element:<AllCampaign></AllCampaign>
                  },
                  {
                        path:'addCampaign',
                        element:<PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>
                  },
                  {
                        path:'donation',
                        element:<PrivateRoute><MyDonation></MyDonation></PrivateRoute>
                  },
                  {
                        path:'campaign',
                        element:<PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>
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