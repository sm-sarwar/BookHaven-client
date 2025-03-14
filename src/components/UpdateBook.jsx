import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const books = useLoaderData();
  const navigate = useNavigate();
  const { name, image, author, category, rating, _id } = books;

  const categories = ["Fiction", "Non-Fiction", "History", "Science"];

  const handleToSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedBook = {
      image: form.image.value,
      name: form.name.value,
      author: form.author.value,
      category: form.category.value,
      rating: form.rating.value,
    };
    console.log(updatedBook);

    fetch(`https://book-haven-server-eight.vercel.app/book/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Book Update successfully!",
            icon: "success",
          });
          navigate("/allBooks");
        }
        else{
          Swal.fire({
            title: "Failed to update book!",
            text: "You haven't changed anything.",
            icon: "error",
          });
        }
      });
  };

  return (
    <div>
        <Helmet>
            <title>UpdateBook - BookHaven</title>
        </Helmet>
      <div className="max-w-2xl mx-auto p-6  shadow rounded my-10 bg-base-200 ">
        <h1 className="text-2xl font-bold mb-6 text-center text-teal-600">
          Update Book
        </h1>
        <form onSubmit={handleToSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              defaultValue={image}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              defaultValue={name}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Author Name
            </label>
            <input
              type="text"
              name="author"
              required
              defaultValue={author}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Category
            </label>
            <select
              name="category"
              defaultValue={category}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select a category</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Rating
            </label>
            <input
              type="number"
              required
              name="rating"
              min="1"
              max="5"
              step="0.1"
              defaultValue={rating}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="btnn w-full text-orange-600 text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10  overflow-hidden border-2 rounded-lg group py-2 px-6  hover:bg-orange-600 transition duration-300"
          >
            Update Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
