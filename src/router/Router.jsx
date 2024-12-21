import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Login from "../page/Login";



  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <h2>Route not found</h2>,
      element:<MainLayout></MainLayout>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
      ]

    },
  ]);

  export default router;