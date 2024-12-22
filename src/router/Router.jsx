import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import AllBooks from "../page/AllBooks";
import PrivateRoute from "./PrivateRoute";
import Error from "../page/Error";
import BooksByCategory from "../components/BooksByCategory";
import AddBooks from "../page/AddBooks";



  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error></Error>,
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
        },
        {
          path:"/categoryBooks/:category",
          element:<BooksByCategory></BooksByCategory>
        },
        {
          path:'/addBook',
          element:<PrivateRoute><AddBooks></AddBooks></PrivateRoute>
        }
      ]

    },
  ]);

  export default router;