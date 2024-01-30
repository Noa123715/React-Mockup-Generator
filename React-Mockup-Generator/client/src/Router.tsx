import   Login  from "./pages/Login";
import   Home  from "./pages/Home";
import {NotFound}  from "./pages/NotFound";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import  {Test } from "./pages/Test";

export const browserRouter = createBrowserRouter([
  {
    element: <App />,    
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/test",
        element: <Test />,  
        
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
