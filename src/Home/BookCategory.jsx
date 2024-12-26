import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const BookCategory = () => {
  // Move useState and useEffect inside the component
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://book-haven-server-eight.vercel.app/booksCategory")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []); // Add dependency array to avoid infinite fetch loop

  return (
    <div className="my-20 font-mona bg-base-200 p-10 rounded-lg">
      <h2 className="text-center font-bold text-teal-700 text-3xl mb-5">Books Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {categories.map((category) => (
          <div key={category._id} className="p-4 shadow-lg rounded-lg">
            <img
              src={category.image}
              alt={category.category}
              className="h-32 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{category.category}</h3>
            <button 
              // to={`/category/${category.category}`}
              onClick={() => navigate(`/categoryBooks/${category.category}`)}
              className="text-teal-600 btn"
            >
              View Books
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategory;
