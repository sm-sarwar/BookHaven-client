import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="my-20 font-mona bg-base-200 p-10 rounded-lg "
      data-aos="fade-up"
    >
      <h2 className="text-center font-bold text-teal-700 text-3xl mb-5">
        Books Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {categories.map((category) => (
          <div key={category._id} className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#4eb6a8] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
            <img
              src={category.image}
              alt={category.category}
              className="h-32 w-full object-cover rounded-md mb-4 transition-transform duration-500 group-hover:scale-110"
            />
            <h3 className="text-lg font-semibold mb-2">{category.category}</h3>
            <button
              // to={`/category/${category.category}`}
              onClick={() => navigate(`/categoryBooks/${category.category}`)}
              className="w-full  flex justify-center gap-2 items-center mx-auto text-teal-600 text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-teal-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10  overflow-hidden border-2 rounded-xl group py-2 px-4  hover:bg-teal-600 transition duration-300"
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
