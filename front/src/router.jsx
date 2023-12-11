import { Navigate, createBrowserRouter } from "react-router-dom";

import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Register from "./views/Register";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard/Dashboard";
import Menu from "./views/Menu/Menu";
import User from "./views/User/User";
import Account from "./views/Account/Account";
import Edit from "./views/User/Edit";
import Upload from "./views/Upload/Upload";
import Food from "./views/Food/Food";
import CartItems from "./views/Food/CartItems";
import Welcome from "./views/Home/Welcome";
import Cancel from "./views/Food/Cancel";
import Success from "./views/Food/Success";
import EmailVerify from "./views/Email/EmailVerify";
import About from "./views/About/About";
import Quize from "./views/QuizBoard/Quize";
import History from "./views/History/History";
import RootOrder from "./views/Orders/RootOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/users" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/users",
        element: <User />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/users/new",
        element: <Edit key="userCreate" />,
      },
      {
        path: "/users/:id",
        element: <Edit key="userUpdate" />,
      },
      {
        path: "/upload",
        element: <Upload />,
      },
      {
        path: "/food",
        element: <Food />,
      },

      {
        path: "/order",
        element: <RootOrder />,
      },

      {
        path: "/cart",
        element: <CartItems />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "/success",
        element: <Success />,
      },

      {
        path: "/history",
        element: <History />,
      },

      {
        path: "/quiz",
        element: <Quize />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/email/verify",
        element: <EmailVerify />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
