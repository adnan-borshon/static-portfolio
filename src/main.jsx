import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: "/",
        element: <Navbar/>
      }
    ]
  },
]);

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
