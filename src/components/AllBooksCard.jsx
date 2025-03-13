import React from "react";
import { useNavigate } from "react-router-dom";

const AllBooksCard = ({ book }) => {
  const { name, image, author, category, rating, content ,_id , quantity} = book;
  const navigate = useNavigate()

  return (
    <div className="p-4 shadow-lg rounded-lg border overflow-hidden border-gray-300 bg-white btnn group flex flex-col justify-between">
      {/* Book Cover */}
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-40 h-60 object-cover rounded-md transition transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Book Details */}
      <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Author:</span> {author}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Category:</span> {category}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Quantity:</span> {quantity}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Rating:</span> {rating} / 5
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-semibold">Description:</span> {content}
      </p>

      {/* Update Button */}
      <button
        className="btnn w-full text-orange-600 text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10  overflow-hidden border-2 rounded-lg group py-2 px-6  hover:bg-orange-600 transition duration-300"
        onClick={() => navigate(`/updateBook/${_id}`)}
      >
        Update
      </button>
    </div>
  );
};

export default AllBooksCard;
