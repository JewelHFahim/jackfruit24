import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../layout/ClientLayout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about-us/AboutUs";

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
    ],
  },
]);

export default router;
