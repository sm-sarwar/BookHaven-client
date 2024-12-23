import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AllBooksCard from "../components/AllBooksCard";
import { FaEdit } from "react-icons/fa";

const AllBooks = () => {
  const allBooks = useLoaderData();
  const [view, setView] = useState("Card"); // State to toggle between views
  const [showAvailable, setShowAvailable] = useState(false); // State to filter books
  const navigate = useNavigate();

  // Filtered books based on quantity
  const filteredBooks = showAvailable
    ? allBooks.filter((book) => book.quantity > 0)
    : allBooks;

  return (
    <div className="bg-base-200 p-10 my-10 rounded-lg">
      <h1 className="text-2xl font-bold text-teal-600 text-center my-5">
        All Books
      </h1>

      {/* Dropdown for selecting view */}
      <div className="flex justify-between items-center mb-5 px-5">
        <select
          value={view}
          onChange={(e) => setView(e.target.value)}
          className="p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
        >
          <option value="Card">Card View</option>
          <option value="Table">Table View</option>
        </select>

        {/* Filter Button */}
        <button
          onClick={() => setShowAvailable(!showAvailable)}
          className={`py-2 px-4 rounded-md text-white ${
            showAvailable
              ? "bg-red-600 hover:bg-red-700"
              : "bg-teal-600 hover:bg-teal-700"
          } transition duration-300`}
        >
          {showAvailable ? "Show All Books" : "Show Available Books"}
        </button>
      </div>

      {/* Conditional rendering based on selected view */}
      {view === "Card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 md:px-0">
          {filteredBooks.map((book) => (
            <AllBooksCard key={book._id} book={book} />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="px-4 py-2">Cover</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Author</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Rating</th>
                <th className="px-4 py-2">Update</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book._id} className="border-b">
                  <td className="px-4 py-2">
                    <img
                      src={book.image}
                      alt={book.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2">{book.name}</td>
                  <td className="px-4 py-2">{book.author}</td>
                  <td className="px-4 py-2">{book.category}</td>
                  <td className="px-4 py-2">{book.rating}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => navigate(`/updateBook/${book._id}`)}
                      className="text-teal-600 hover:text-teal-800"
                    >
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBooks;

