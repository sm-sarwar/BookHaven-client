import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import 'animate.css';

import registrationAnimation from "../assets/registration.json";
import useAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleToRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    setError("");
    setSuccess(false);

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!regex.test(password)) {
      setError(
        " Please write at least one uppercase and at least one lowercase"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          navigate("/");
        });
        // .catch(error => console.log(error))
        Swal.fire({
          title: "Good job!",
          text: "Registration successful",
          icon: "success",
        });
        setSuccess(true);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setError(error.message);
        setSuccess(false);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Register - BookHaven</title>
      </Helmet>
      <div className="py-10  grid grid-cols-1 md:grid-cols-2 place-items-center bg-gray-100 my-10 rounded-lg">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate__animated animate__slow	1s animate__fadeInLeft">
          {/* Title */}
          <h1 className="text-4xl font-bold text-center mb-6 text-teal-700">
            Register Now!
          </h1>
          {/* Registration Form */}
          <form onSubmit={handleToRegister}>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg text-gray-700 bg-white border-none shadow-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-gray-700 bg-white border-none shadow-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
            </div>

            {/* Photo URL Field */}
            <div className="mb-4">
              <label
                htmlFor="photo-url"
                className="block text-gray-600 font-medium mb-2"
              >
                Photo URL
              </label>
              <input
                type="text"
                id="photo-url"
                name="photo"
                required
                placeholder="Enter your photo URL"
                className="w-full px-4 py-2 rounded-lg text-gray-700 bg-white border-none shadow-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-gray-600 font-medium mb-2 "
              >
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                id="password"
                name="password"
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-lg text-gray-700 bg-white border-none shadow-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => {
                  setShow(!show);
                }}
                className="btn btn-xs absolute right-4 top-13"
              >
                {show ? (
                  <FaEyeSlash type="button"></FaEyeSlash>
                ) : (
                  <FaEye type="button" />
                )}
              </button>
            </div>

            {/* Register Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-700 text-white rounded-lg shadow-lg hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300"
              >
                Register
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-teal-600 hover:underline">
                Login here
              </Link>
            </p>
          </div>
          <SocialLogin></SocialLogin>
        </div>

        <div className="animate__animated animate__slow	1s animate__fadeInRight">
          {/* Lottie  */}
          <Lottie
            animationData={registrationAnimation}
            className="md:w-[450px]"
          ></Lottie>
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>}
        {
          success && (
            <div className="text-green-500 text-center">
              SignUp successful. Please check your email for verification.
            </div>
          ) // Display success message if any
        }
      </div>
    </div>
  );
};

export default Register;
