import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/base.scss";
import { createBrowserRouter, RouterProvider } from "react-router";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import App from "./App";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/reg",
    element: <RegistrationPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routerConfig} />
  </React.StrictMode>
);
