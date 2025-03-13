import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import useAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate();
  const { signOutUser, user } = useAuth();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  const handleSignOut = () => {
    signOutUser();
    Swal.fire({
      icon: "error",
      text: "LogOut!",
     
    });
    navigate("/");
  };

  const links = (
    <>
      <li>
        <NavLink className="hover:text-teal-500 font-semibold" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-teal-500 font-semibold" to="/allBooks">
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-teal-500 font-semibold" to="/addBook">
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-teal-500 font-semibold"
          to="/borrowedBook"
        >
          Borrowed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-teal-500 font-semibold"
          to="/contact"
        >
          Contact 
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar max-w-screen-xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img className="w-8 rounded-lg font-bold" src={logo} alt="" />
            <h3 className="text-teal-500 font-anton text-xl md:text-2xl">
              Book<span className="text-[#4DA1A9] ">Haven</span>
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className=" menu-horizontal space-x-6 px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-2">
          {user ? (
            <>
              <div className="relative group">
                {/* Profile Image */}
                <img
                  className="w-10 rounded-full cursor-pointer"
                  src={user.photoURL}
                  referrerPolicy="no-referrer"
                  alt="User Profile"
                />

                {/* Tooltip for Display Name */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 bg-gray-800 text-white text-sm rounded px-5 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {user.displayName || "No Name"}
                </div>
              </div>

              {/* Log Out Button */}
              <button
                onClick={handleSignOut}
                className="md:px-5 md:py-2 py-1 px-3 bg-[#4DA1A9] text-white font-bold rounded-md"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleLoginRedirect}
                className="md:px-5 md:py-2 py-1 px-3 bg-teal-500 text-white font-bold rounded-md"
              >
                Login
              </button>
              <button
                onClick={handleRegisterRedirect}
                className="md:px-5 md:py-2 py-1 px-3 bg-[#4DA1A9] text-white font-bold rounded-md"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
