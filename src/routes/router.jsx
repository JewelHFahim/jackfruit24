import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../layout/ClientLayout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about-us/AboutUs";
import Admin from "../authentication/Admin";
import Register from "../authentication/register/Register";
import Login from "../authentication/Login";
import ProductPage from "../pages/product-page/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "/admin-login",
    element: <Admin />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
