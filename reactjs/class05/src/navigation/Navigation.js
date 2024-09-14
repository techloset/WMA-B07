import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Contact from "../pages/contact/Contact"
import Home from "../pages/home/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
      {
        path: "/contact",
        element: <Contact/>,
      },
    
  ]);

export default function Navigation(params) {
    return (
        <RouterProvider router={router} />
    )
}