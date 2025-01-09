import React from "react";
import contactImg from '../assets/Mention.png'
import 'animate.css';
const Contact = () => {
  return (
    <div className="bg-base-200 min-h-screen py-10">
      <h1 className="text-center text-3xl font-bold text-teal-700 mb-8">
        Contact Our team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div className="px-5 animate__animated animate__slow	1s animate__fadeInLeft">
          <div className=" max-w-lg bg-white p-8 rounded-md shadow-md ">
            <form className="">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message here"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full  flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-teal-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10  overflow-hidden border-2 rounded-xl group py-2 px-4  hover:bg-teal-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-[500px] animate__animated animate__slow	1s animate__fadeInRight">
            <img src={contactImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
