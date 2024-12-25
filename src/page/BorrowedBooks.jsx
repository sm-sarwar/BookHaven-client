import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/UseAuth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const { user } = useAuth();
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/borrowBooks?email=${user.email}`,{
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setBorrowedBooks(data));
  }, [user.email]);

  // return book 
  const handleReturnBook = (borrowEntryId, bookId) =>{
    

    fetch(`http://localhost:5000/book/${borrowEntryId}?bookId=${bookId}`,{
      method: "DELETE",
      
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
       if(data.deletedCount > 0){
        Swal.fire({
          title: "Good job!",
          text: "Book Return successfully",
          icon: "success"
        });
        const remaining = borrowedBooks.filter(book => book._id !== borrowEntryId)
        setBorrowedBooks(remaining);
       }
    })
  }

  return (
    <div>
      <Helmet>
        <title>BorrowedBooks - BookHaven</title>
      </Helmet>
      <div className="bg-base-200 min-h-screen py-10">
        <h1 className="text-center text-2xl font-bold text-teal-700 mb-5">
          My Borrowed Books
        </h1>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {borrowedBooks.map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-md rounded-lg p-5 border border-gray-300"
            >
              <img
                src={book.image}
                alt={book.name}
                className="w-full  object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {book.name}
              </h2>
              <p className="text-gray-600">
                <span className="font-semibold">Category:</span> {book.category}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Borrowed Date:</span>{" "}
                {new Date(book.borrowedDate).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Return Date:</span>{" "}
                {new Date(book.returnDate).toLocaleDateString()}
              </p>
              <button
                onClick={() => handleReturnBook(book._id, book.bookId)}
                className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
              >
                Return Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooks;
