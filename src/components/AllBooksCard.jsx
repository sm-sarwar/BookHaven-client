import React from "react";
import { useNavigate } from "react-router-dom";

const AllBooksCard = ({ book }) => {
  const { name, image, author, category, rating, content ,_id , quantity} = book;
  const navigate = useNavigate()

  return (
    <div className="p-4 shadow-lg rounded-lg border border-gray-300 bg-white">
      {/* Book Cover */}
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-40 h-60 object-cover rounded-md"
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
        className="w-full font-semibold bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300"
        onClick={() => navigate(`/updateBook/${_id}`)}
      >
        Update
      </button>
    </div>
  );
};

export default AllBooksCard;
