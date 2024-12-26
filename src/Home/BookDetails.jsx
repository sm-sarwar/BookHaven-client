import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const BookDetails = () => {
  const { name, image, author, category, quantity, content, _id } =
    useLoaderData();
  const [alreadyBorrowed, setAlreadyBorrowed] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://book-haven-server-eight.vercel.app/borrowBooks/check?bookId=${_id}&userEmail=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlreadyBorrowed(data.alreadyBorrowed);
      });
  }, [_id, user.email]);

  const handleToSubmitBorrowBook = (e) => {
    e.preventDefault();

    if (alreadyBorrowed) {
      Swal.fire({
        title: "Warning!",
        text: "You have already borrowed this book! Please return it before borrowing again.",
        icon: "warning",
      });
      return;
    }

    const form = e.target;
    const name = form.name.value;
    const userEmail = form.email.value;
    const returnDate = form.returnDate.value;
    const borrowedDate = new Date().toISOString().split("T")[0];

    const borrowBooks = {
      bookId: _id,
      name,
      userEmail,
      returnDate,
      borrowedDate,
    };

    fetch("https://book-haven-server-eight.vercel.app/borrowBooks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(borrowBooks),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw new Error(error.error);
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Borrow book successfully!",
            icon: "success",
          });
          navigate("/borrowedBook");
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          title: "Error!",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>BookDetails - BookHaven</title>
      </Helmet>
      <div className="bg-base-200 py-5">
        <h1 className="text-center text-3xl font-bold text-teal-700">
          A Closer Look at Your Favorite Reads
        </h1>
        <p className="max-w-screen-md mx-auto my-5 px-5 text-gray-600 ">
          Discover every detail about your favorite book! From the captivating
          cover to the talented author, explore comprehensive information about
          the book's category, availability, and an engaging description that
          offers a sneak peek into the story. Ready to dive in? Borrow your book
          now with just a click!
        </p>
        <div className="flex justify-center items-center py-10 p-6">
          <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Book Image */}
              <div className="md:w-1/3 p-5">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Book Details */}
              <div className="p-6 md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {name}
                </h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Author:</span> {author}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Category:</span> {category}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Quantity:</span> {quantity}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Description:</span> {content}
                </p>

                {/* Borrow Button */}
                <button
                  className={`w-full py-2 px-4 rounded-md transition duration-300 ${
                    quantity > 0 && !alreadyBorrowed
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "bg-gray-400 text-gray-600 cursor-not-allowed"
                  }`}
                  onClick={() =>
                    quantity > 0 &&
                    !alreadyBorrowed &&
                    document.getElementById("borrow_modal").showModal()
                  }
                  disabled={quantity === 0 || alreadyBorrowed}
                >
                  {alreadyBorrowed ? "Already Borrowed" : "Borrow"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Borrow Form */}
        <dialog id="borrow_modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4 text-teal-600">
              Borrow Book
            </h3>
            <form onSubmit={handleToSubmitBorrowBook}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={user.displayName}
                  readOnly={true}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={user.email}
                  readOnly={true}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="returnDate"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Return Date:
                </label>
                <input
                  type="date"
                  name="returnDate"
                  id="returnDate"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="modal-action">
                <button
                  type="submit"
                  className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                  onClick={() =>
                    document.getElementById("borrow_modal").close()
                  }
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default BookDetails;
