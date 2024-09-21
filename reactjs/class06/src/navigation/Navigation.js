import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Contact from "../pages/contact/Contact"
import Home from "../pages/home/Home"
import Service from "../pages/service/Service"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/service",
        element: <Service/>,
      },
    
  ]);

export default function Navigation(params) {
    return (
        <RouterProvider router={router} />
    )
}