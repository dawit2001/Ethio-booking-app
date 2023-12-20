import React from "react";
import ReactDOM from "react-dom/client";
import "leaflet/dist/leaflet.css";
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
import ConfirmEmail from "./pages/ConfirmEmail.jsx";
import SearchResult from "./pages/SearchResult.jsx";
import Hotel from "./pages/Hotel.jsx";
import RegisterHotel from "./pages/RegisterHotel.jsx";
import RegisterRoom from "./pages/RegisterRoom.jsx";

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
    path: "/email-confirmed",
    element: <ConfirmEmail />,
    errorElement: <Error />,
  },
  {
    path: "/hotel/:id/:hotelname",
    element: <Hotel />,
    errorElement: <Error />,
  },
  {
    path: "/hotel/register",
    element: <RegisterHotel />,
    errorElement: <Error />,
  },
  {
    path: "/hotel/search",
    element: <SearchResult />,
    errorElement: <Error />,
  },
  {
    path: "/room/register",
    element: <RegisterRoom />,
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<>Loading</>} />
  </React.StrictMode>
);
