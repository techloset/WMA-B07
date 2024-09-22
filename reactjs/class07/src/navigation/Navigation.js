import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Contact from "../pages/contact/Contact"
import Home from "../pages/home/Home"
import Service from "../pages/service/Service"
import Counter from "../pages/counter/Counter"

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
      {
        path: "/counter",
        element: <Counter/>,
      },
    
  ]);

export default function Navigation(params) {
    return (
        <RouterProvider router={router} />
    )
}