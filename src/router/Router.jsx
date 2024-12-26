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
import BorrowedBooks from "../page/BorrowedBooks";
import UpdateBook from "../components/UpdateBook";



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
          element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
          loader:()=> fetch('https://book-haven-server-eight.vercel.app/books')

        },
        {
          path:"/categoryBooks/:category",
          element:<BooksByCategory></BooksByCategory>,
          loader:()=> fetch('https://book-haven-server-eight.vercel.app/books')
        },
        {
          path:'/addBook',
          element:<PrivateRoute><AddBooks></AddBooks></PrivateRoute>
        },
        {
          path: "/books/:id",
          element :<PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
          loader:({params})=> fetch(`https://book-haven-server-eight.vercel.app/books/${params.id}`)
        },
        {
          path:"/borrowedBook",
          element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
        },
        {
          path:'/updateBook/:id',
          element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
          loader:({params})=> fetch(`https://book-haven-server-eight.vercel.app/book/${params.id}`)
        }
      ]

    },
  ]);

  export default router;