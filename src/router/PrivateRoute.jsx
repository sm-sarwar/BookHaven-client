import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import { BounceLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <BounceLoader color="#36d7b7" />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
