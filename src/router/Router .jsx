import {
    createBrowserRouter,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <h2>Route not found</h2>,
      element: <div>Hello world!</div>,
    },
  ]);

  export default router;