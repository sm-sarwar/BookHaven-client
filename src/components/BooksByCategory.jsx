import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Rating from 'react-rating-stars-component';

const BooksByCategory = () => {
  const { category } = useParams();
  const loadedBooks = useLoaderData(); 
  const booksInCategory = loadedBooks.filter(
    (book) => book.category === category
  ); 

  return (
    <div className="my-20 bg-base-200 md:p-10 rounded-lg">
      
      <h2 className="text-3xl font-bold text-center mb-8">
        Books in <span className="text-teal-600">{category}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-0">
        {booksInCategory.map((book) => (
          <div key={book._id}>
            <div className="p-4 shadow-lg rounded-lg border border-gray-300">
              <img
                src={book.image}
                alt={book.name}
                className="rounded-md mb-4 md:w-96 md:h-[450px]"
              />
              <h3 className="text-lg font-semibold mb-2">{book.name}</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Author:</span> {book.author}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Category:</span> {book.category}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Quantity:</span> {book.quantity}
              </p>
              <div className="flex items-center mb-3">
                <span className="font-semibold text-gray-600 mr-2">
                  Rating:
                </span>
                <Rating
                  value={book.rating}
                  edit={false}
                  size={20}
                  activeColor="#ffd700"
                  isHalf={true}
                />
              </div>
              <button
                className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700"
                onClick={() => alert(`Viewing details for ${book.name}`)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksByCategory;

