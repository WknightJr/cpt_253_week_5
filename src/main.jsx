import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import App from "./app";
import { HomePage } from './pages/home';
import { ProfilePage } from './pages/profile'
import { ErrorPage } from './pages/error'
//I have imported the profile and error pages here//


const root = document.getElementById("root");

const router = BrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <ErrorPage />,
},
{
  path: '/profiles',
  element: <ProfilePage />,
}
//These are the router links to the profile and error pages//



]);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
