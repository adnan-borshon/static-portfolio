import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/mainLayout.jsx";
import Navbar from "./Layout/navbar.jsx";
import Home from "./Layout/Home.jsx";
import About from "./Layout/About.jsx";


let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/about",
        element: <About/>,
      }
    ]
   
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
