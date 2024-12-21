import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.webp'

const Footer = () => {
  return (
    <footer className="footer py-14 px-20 bg-base-300 text-base-content ">
      <div>
        <p>
          <Link to="/" className=" text-xl">
            <img className="w-12 rounded-lg font-bold" src={logo} alt="" />
            <h3 className="text-teal-500 font-anton text-xl md:text-2xl">
              Book<span className="text-[#4DA1A9] ">Haven</span>
            </h3>
          </Link>
          BookHaven Ltd.
          <br />
          Providing reliable library management services since 2024
        </p>
      </div>
      <div>
        <span className="footer-title">Navigation</span>
        <a className="link link-hover" href="/">
          Home
        </a>
        <a className="link link-hover" href="/allBooks">
          All Books
        </a>
        <a className="link link-hover" href="/addBook">
          Add Book
        </a>
        <a className="link link-hover" href="/borrowedBook">
          Borrowed Books
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover" href="/terms">
          Terms of Use
        </a>
        <a className="link link-hover" href="/privacy">
          Privacy Policy
        </a>
        <a className="link link-hover" href="/cookie">
          Cookie Policy
        </a>
      </div>
      <div>
        <span className="footer-title">Follow Us</span>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495V14.708H9.692v-3.584h3.128V8.337c0-3.1 1.892-4.792 4.657-4.792 1.325 0 2.465.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.588l-.467 3.584h-3.121V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.93 4.93 0 002.165-2.725 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.372 4.482A13.937 13.937 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.902 4.902 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.894a4.93 4.93 0 01-2.224.084 4.93 4.93 0 004.604 3.419A9.874 9.874 0 010 21.543a13.905 13.905 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.266.058-1.646.07-4.851.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608C2.175 15.585 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.342-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317C8.415 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.556.347 3.515 1.388 2.475 2.428 2.256 3.643 2.198 4.924c-.058 1.28-.07 1.689-.07 4.926s.012 3.646.07 4.926c.058 1.281.277 2.496 1.317 3.536 1.04 1.04 2.255 1.259 3.536 1.317 1.28.058 1.689.07 4.926.07s3.646-.012 4.926-.07c1.281-.058 2.496-.277 3.536-1.317 1.04-1.04 1.259-2.255 1.317-3.536.058-1.28.07-1.689.07-4.926s-.012-3.646-.07-4.926c-.058-1.281-.277-2.496-1.317-3.536C19.332.347 18.117.128 16.836.07 15.556.012 15.167 0 12 0z" />
              <path d="M12 5.838A6.163 6.163 0 105.837 12 6.153 6.153 0 0012 5.838zm0-2.838A9 9 0 119 21a9 9 0 013-17zm6.406-.36a1.44 1.44 0 11-1.44-1.44 1.436 1.436 0 011.44 1.44z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <p className="mt-6 text-center text-xs text-gray-500">
          &copy; 2024 BookHaven. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
