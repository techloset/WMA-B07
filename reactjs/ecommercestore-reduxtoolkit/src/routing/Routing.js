import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/products",
    element: <Products/>,
  }

]);

export default function Routing(params) {
  return (
    <RouterProvider router={router} />
  )
}