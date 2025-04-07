import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


let router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world</div>, 
  },
]);


const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
