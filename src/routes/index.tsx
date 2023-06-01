import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages";
import Payment from "../pages/Payment";
import PaymentSuccess from "../pages/PaymentSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/payment+success",
    element: <PaymentSuccess />,
  },
]);

const index = () => {
  return <RouterProvider router={router} />;
};

export default index;
