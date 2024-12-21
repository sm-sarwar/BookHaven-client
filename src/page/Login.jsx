import Lottie from "lottie-react";
import React from "react";
import loginAnimation from '../assets/loginAniamtion.json'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero bg-base-200 py-20 my-10 font-mona rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="">
                <Lottie className="md:w-[450px]" animationData={loginAnimation}></Lottie>
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
            <h1 className="text-4xl font-bold text-center text-teal-700">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-teal-700 hover:text-black">Login</button>
              </div>
              <p className="text-sm">Don't have an account? <Link to="/register" className="text-teal-600 hover:underline">Register here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
