import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../layout/ClientLayout";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
