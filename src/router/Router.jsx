import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import AllBooks from "../page/AllBooks";
import PrivateRoute from "./PrivateRoute";



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
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/allBooks',
          element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>
        }
      ]

    },
  ]);

  export default router;