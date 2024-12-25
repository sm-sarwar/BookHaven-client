import Lottie from "lottie-react";
import React from "react";
import loginAnimation from "../assets/loginAniamtion.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location )
  const from = location?.state || "/";

  const handleToLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          text: "Login Successfully!",
          icon: "success"
        });
        navigate(from);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login - BookHaven</title>
      </Helmet>
      <div className="hero bg-base-200 py-20 my-10 font-mona rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="">
              <Lottie
                className="md:w-[450px]"
                animationData={loginAnimation}
              ></Lottie>
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleToLogin} className="card-body">
              <h1 className="text-4xl font-bold text-center text-teal-700">
                Login now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-teal-700 hover:text-black">
                  Login
                </button>
              </div>
              <p className="text-sm">
                Don't have an account?{" "}
                <Link to="/register" className="text-teal-600 hover:underline">
                  Register here
                </Link>
              </p>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
