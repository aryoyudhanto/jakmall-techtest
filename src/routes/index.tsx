import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages";
import Payment from "../pages/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);

const index = () => {
  return <RouterProvider router={router} />;
};

export default index;
