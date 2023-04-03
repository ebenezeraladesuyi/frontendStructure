import React from 'react';
import {createBrowserRouter} from "react-router-dom"; 
import { HomeLayout } from '../components';
import { Home } from '../pages';
import { BoundaryError } from '../utils';
import NotFound from '../utils/hoc/NotFound';



    export const element = createBrowserRouter([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    index: true,
                    element: <Home/>,
                    errorElement: <BoundaryError/>,
                    hasErrorBoundary: true
                },
                {
                    path: "#",
                    element: <NotFound />,
                }
            ]
        }
    ])

