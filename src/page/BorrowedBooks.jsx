import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/UseAuth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const { user } = useAuth();
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    fetch(`https://book-haven-server-eight.vercel.app/borrowBooks?email=${user.email}`,{
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setBorrowedBooks(data));
  }, [user.email]);

  // return book 
  const handleReturnBook = (borrowEntryId, bookId) =>{
    

    fetch(`https://book-haven-server-eight.vercel.app/book/${borrowEntryId}?bookId=${bookId}`,{
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
      <div className="bg-base-200 min-h-screen py-10 ">
        <h1 className="text-center text-2xl font-bold text-teal-700 mb-5">
          My Borrowed Books
        </h1>
        {borrowedBooks.length === 0 ? (
          <p className="text-center text-lg text-gray-600 mt-10">
            You have not borrowed any books yet.
          </p>
        ) : (
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {borrowedBooks.map((book) => (
              <div
                key={book._id}
                className="bg-white shadow-md rounded-lg p-5 border border-gray-300 group btnn flex flex-col justify-between"
              >
                <img
                  src={book.image}
                  alt={book.name}
                  className="  object-cover rounded-md mb-4 transition-transform duration-500 group-hover:scale-105"
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
                  className="btnn mt-2 w-full text-red-600 text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-red-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10  overflow-hidden border-2 rounded-lg group py-2 px-6  hover:bg-red-600 transition duration-300"
                >
                  Return Book
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  
};

export default BorrowedBooks;
