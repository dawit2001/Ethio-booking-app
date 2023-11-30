import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Login.jsx";
import LoginPassword from "./pages/LoginPassword.jsx";
import RecoverAccount from "./pages/RecoverAccount.jsx";
import RegisterPassword from "./pages/RegisterPassword.jsx";
import ConfirmRecoverAccount from "./pages/ConfirmRecoverAccount.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    errorElement: <Error />,
    children: [
      {
        path: "password",
        element: <RegisterPassword />,
      },
    ],
  },
  {
    path: "/signin",
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "password",
        element: <LoginPassword />,
      },
    ],
  },
  {
    path: "/recover-account",
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <RecoverAccount />,
      },
      {
        path: "confirmation",
        element: <ConfirmRecoverAccount />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/confirm-email",
    element: <Home />,
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<>Loading</>} />
  </React.StrictMode>
);
