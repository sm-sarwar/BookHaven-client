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
import BookDetails from "../Home/BookDetails";



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
          element:<BooksByCategory></BooksByCategory>,
          loader:()=> fetch('http://localhost:5000/books')
        },
        {
          path:'/addBook',
          element:<PrivateRoute><AddBooks></AddBooks></PrivateRoute>
        },
        {
          path: "/books/:id",
          element : <BookDetails></BookDetails>,
          loader:({params})=> fetch(`http://localhost:5000/books/${params.id}`)
        }
      ]

    },
  ]);

  export default router;