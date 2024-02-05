import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../layout/ClientLayout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about-us/AboutUs";
import Admin from "../authentication/Admin";
import Register from "../authentication/register/Register";
import Login from "../authentication/Login";
import ProductPage from "../pages/product-page/ProductPage";
import ProductDetails from "../pages/product-page/ProductDetails";
import Cart from "../pages/cart/Cart";
import WishList from "../pages/wishlist/WishList";

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
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
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
